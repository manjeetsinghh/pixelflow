# PixelFlow Localhost & Wi-Fi Server
# Uses System.Net.Sockets.TcpListener to bind to all interfaces (0.0.0.0) on port 3000.
# This does NOT require admin privileges, allowing access from your mobile phone!

$port = 3000
$IP = [System.Net.IPAddress]::Any

try {
    $server = New-Object System.Net.Sockets.TcpListener($IP, $port)
    $server.Start()
} catch {
    # Fallback to 3001 if port 3000 is taken
    $port = 3001
    $server = New-Object System.Net.Sockets.TcpListener($IP, $port)
    $server.Start()
}

# Find local Wi-Fi / LAN IP addresses to display to the user
$localIPs = Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.InterfaceAlias -like "*Wi-Fi*" -or $_.InterfaceAlias -like "*Ethernet*" } | Select-Object -ExpandProperty IPAddress
$primaryIP = $localIPs | Select-Object -First 1

Write-Host "========================================="
Write-Host "  PixelFlow Wi-Fi Server Is Running!"
Write-Host "  Local URL:  http://localhost:$port/"
if ($primaryIP) {
    Write-Host "  Mobile URL: http://$($primaryIP):$port/"
}
Write-Host "========================================="
Write-Host "Press Ctrl+C to terminate the server."
Write-Host ""

$currentDir = Get-Item .

try {
    while ($true) {
        if (-not $server.Pending()) {
            Start-Sleep -Milliseconds 50
            continue
        }
        
        $client = $server.AcceptTcpClient()
        $stream = $client.GetStream()
        
        # Read header bytes
        $buffer = New-Object System.Byte[] 2048
        $readBytes = $stream.Read($buffer, 0, $buffer.Length)
        if ($readBytes -le 0) {
            $stream.Close()
            $client.Close()
            continue
        }
        
        $requestText = [System.Text.Encoding]::UTF8.GetString($buffer, 0, $readBytes)
        
        if ($requestText -match "^(GET|POST)\s+([^\s?]+)") {
            $method = $Matches[1]
            $urlPath = $Matches[2]
            
            if ($urlPath -eq "/") {
                $urlPath = "/index.html"
            }
            
            # Resolve url decoding safely
            $urlPath = $urlPath -replace "\+", " "
            $urlPath = [System.Uri]::UnescapeDataString($urlPath)
            
            # Form file path
            $filePath = Join-Path $currentDir.FullName $urlPath
            $filePath = [System.IO.Path]::GetFullPath($filePath)
            
            # Direct check if file is within root directory and exists
            if ($filePath.StartsWith($currentDir.FullName) -and (Test-Path $filePath -PathType Leaf)) {
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = "application/octet-stream"
                
                switch ($ext) {
                    ".html" { $contentType = "text/html; charset=utf-8" }
                    ".css"  { $contentType = "text/css; charset=utf-8" }
                    ".js"   { $contentType = "application/javascript; charset=utf-8" }
                    ".png"  { $contentType = "image/png" }
                    ".jpg"  { $contentType = "image/jpeg" }
                    ".jpeg" { $contentType = "image/jpeg" }
                    ".svg"  { $contentType = "image/svg+xml" }
                    ".mp4"  { $contentType = "video/mp4" }
                }
                
                Write-Host "Request: $method $urlPath -> 200 OK"
                
                $fileBytes = [System.IO.File]::ReadAllBytes($filePath)
                
                $header = "HTTP/1.1 200 OK`r`n" +
                          "Content-Type: $contentType`r`n" +
                          "Content-Length: $($fileBytes.Length)`r`n" +
                          "Access-Control-Allow-Origin: *`r`n" +
                          "Connection: close`r`n`r`n"
                
                $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                $stream.Write($headerBytes, 0, $headerBytes.Length)
                $stream.Write($fileBytes, 0, $fileBytes.Length)
            } else {
                Write-Host "Request: $method $urlPath -> 404 Not Found"
                
                $errBody = "404 Not Found"
                $errBytes = [System.Text.Encoding]::UTF8.GetBytes($errBody)
                $header = "HTTP/1.1 404 Not Found`r`n" +
                          "Content-Type: text/plain`r`n" +
                          "Content-Length: $($errBytes.Length)`r`n" +
                          "Connection: close`r`n`r`n"
                
                $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                $stream.Write($headerBytes, 0, $headerBytes.Length)
                $stream.Write($errBytes, 0, $errBytes.Length)
            }
        }
        
        $stream.Close()
        $client.Close()
    }
} catch {
    Write-Host "Server encountered an error: $_"
} finally {
    if ($server) {
        $server.Stop()
    }
}
