// --- STATE MANAGEMENT ---
let state = {
  currentUser: {
    name: "Alex Rivera",
    username: "alex_rivera",
    handle: "@alex_rivera",
    avatar: "assets/my_avatar.png",
    bio: "📷 Capturing moments through a modern lens\n🎬 Digital Creator & Cinephile\n📍 San Francisco, CA",
    postsCount: 5,
    followers: "4.8k",
    following: 382
  },
  posts: [],
  reels: [],
  stories: [],
  contacts: [],
  messages: {}
};

// Initial Seed Data to populate the app on first run
const SEED_DATA = {
  stories: [
    {
      id: "story-1",
      authorName: "Aria Chen",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      read: false,
      slides: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1472214222541-d510753a8707?auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: "story-2",
      authorName: "Zara Croft",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      read: false,
      slides: [
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: "story-3",
      authorName: "Liam Vance",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      read: false,
      slides: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
      ]
    },
    {
      id: "story-4",
      authorName: "Elena Rostova",
      authorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      read: false,
      slides: [
        "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80",
        "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=600&q=80"
      ]
    }
  ],
  posts: [
    {
      id: "post-1",
      authorName: "Aria Chen",
      authorHandle: "@aria_design",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      location: "Kyoto, Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
      caption: "Lost in the colors of Kyoto. The autumn temples are absolute poetry. 🍁✨",
      likes: 1248,
      liked: false,
      bookmarked: false,
      time: "2 HOURS AGO",
      comments: [
        { username: "zara_vlog", text: "Stunning shot! Adding this to my list." },
        { username: "liam_art", text: "The composition is incredible Aria!" }
      ],
      filterStyle: ""
    },
    {
      id: "post-2",
      authorName: "Liam Vance",
      authorHandle: "@liam_art",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      location: "Studio Mode",
      image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?auto=format&fit=crop&w=800&q=80",
      caption: "New cyberpunk illustrations cooked up this morning. Mixing retro vibes with neon blurs. 🕹️⚡",
      likes: 852,
      liked: false,
      bookmarked: false,
      time: "5 HOURS AGO",
      comments: [
        { username: "aria_design", text: "Loving the lighting accents Liam!" }
      ],
      filterStyle: "filter: contrast(1.2) saturate(1.3) hue-rotate(-5deg);"
    },
    {
      id: "post-3",
      authorName: "Zara Croft",
      authorHandle: "@zara_vlog",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      location: "Amalfi Coast, Italy",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      caption: "Salt in the air, wind in my hair. Amalfi coasting. 🍋🌊 Who wants to jump in?",
      likes: 3105,
      liked: true,
      bookmarked: false,
      time: "1 DAY AGO",
      comments: [
        { username: "alex_rivera", text: "Take me there! Looks absolute paradise." },
        { username: "elena_r", text: "Beautiful Italian summer vibe!" }
      ],
      filterStyle: ""
    }
  ],
  reels: [
    {
      id: "reel-1",
      authorName: "Zara Croft",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-ocean-near-a-cliff-43028-large.mp4",
      caption: "Crashing waves and coastal caves. Exploring the edge of the world. 🌊🦅 #nature #cliff #wanderlust",
      likes: "14.2k",
      commentsCount: "482",
      musicName: "Ocean Breeze - Zara Croft Acoustic",
      audioDiskImg: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=100&q=80",
      liked: false
    },
    {
      id: "reel-2",
      authorName: "Liam Vance",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-neon-light-from-a-building-reflecting-in-the-rain-41582-large.mp4",
      caption: "Rainy streets and neon glows. Cyberpunk realities in the heart of Tokyo. 🌧️🚦👾 #neon #aesthetic #rainyday",
      likes: "8.9k",
      commentsCount: "256",
      musicName: "Lo-Fi Midnight - SynthRunner",
      audioDiskImg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=100&q=80",
      liked: true
    },
    {
      id: "reel-3",
      authorName: "Aria Chen",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-liquid-marble-ink-swirling-in-water-43338-large.mp4",
      caption: "Creative flow states. Swirling colors in liquid motion. 🎨🌀 #abstract #design #fluidart",
      likes: "21.5k",
      commentsCount: "1.1k",
      musicName: "Abstract Echoes - Design Beats",
      audioDiskImg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=100&q=80",
      liked: false
    }
  ],
  contacts: [
    {
      id: "aria",
      name: "Aria Chen",
      handle: "@aria_design",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      status: "online",
      bio: "Creative Director | Design Thinker | Tokyo Enthusiast 🎨",
      unreadCount: 0
    },
    {
      id: "zara",
      name: "Zara Croft",
      handle: "@zara_vlog",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      status: "online",
      bio: "Travel vlogger filming my way around the globe. 🌍🎥",
      unreadCount: 2
    },
    {
      id: "liam",
      name: "Liam Vance",
      handle: "@liam_art",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      status: "offline",
      bio: "Digital Artist & 3D Sculptor. Re-imagining tomorrow. 🤖",
      unreadCount: 0
    }
  ],
  messages: {
    aria: [
      { sender: "friend", text: "Hey Alex! Loved your recent architectural photo. Was it shot on film?", time: "10:32 AM" },
      { sender: "user", text: "Thanks Aria! Yes, shot it on Fujifilm Superia 400. The colors came out really rich.", time: "10:35 AM" },
      { sender: "friend", text: "Ah, Fujifilm colors are legendary. We should collaborate on a shoot soon!", time: "10:36 AM" }
    ],
    zara: [
      { sender: "friend", text: "Hey! Are you coming to the Amalfi Coast reunion this summer?", time: "Yesterday" },
      { sender: "friend", text: "We are booking the boat charter soon! Need to know numbers.", time: "Yesterday" }
    ],
    liam: [
      { sender: "user", text: "Liam! That cyberpunk render was incredible. Which renderer did you use?", time: "3 Days ago" },
      { sender: "friend", text: "Thanks man! Used Octane Render inside Blender. Set up the atmospheric fog to get that neon scattering.", time: "3 Days ago" }
    ]
  }
};

// Load state from LocalStorage or initialize with seed data
function initAppStore() {
  const savedState = localStorage.getItem("pixelflow_state");
  if (savedState) {
    try {
      state = JSON.parse(savedState);
      // Double check custom user avatar exists, replace standard placeholders if broken
      if (!state.currentUser.avatar || (!state.currentUser.avatar.startsWith('data:image/') && !state.currentUser.avatar.includes('assets/'))) {
        state.currentUser.avatar = "assets/my_avatar.png";
      }
    } catch (e) {
      console.error("Failed to parse local storage state, fallback to seed.", e);
      state = { ...SEED_DATA, currentUser: state.currentUser };
    }
  } else {
    state = { ...SEED_DATA, currentUser: state.currentUser };
    saveAppState();
  }
}

function saveAppState() {
  localStorage.setItem("pixelflow_state", JSON.stringify(state));
}


// --- VIEW ROUTING CONTROLLER ---
const views = document.querySelectorAll(".app-view");
const navItems = document.querySelectorAll(".nav-item, .mobile-nav-item");

function setupRouter() {
  navItems.forEach(item => {
    item.addEventListener("click", function(e) {
      const targetViewId = this.getAttribute("data-view");
      
      // If click "Create", open the uploader modal overlay instead of navigating
      if (this.id === "nav-create-btn" || this.id === "mobile-create-btn" || targetViewId === "create") {
        e.preventDefault();
        openCreateModal();
        return;
      }
      
      e.preventDefault();
      switchView(targetViewId);
    });
  });

  // Welcome screen Start Messaging Button trigger
  const startMsgBtn = document.getElementById("start-messaging-btn");
  if (startMsgBtn) {
    startMsgBtn.addEventListener("click", () => {
      // Pick first friend
      const firstFriendRow = document.querySelector(".chat-user-row");
      if (firstFriendRow) {
        firstFriendRow.click();
      }
    });
  }
}

function switchView(viewId) {
  if (!viewId) return;

  // Deactivate all view states
  views.forEach(view => {
    view.classList.remove("active");
  });
  navItems.forEach(item => {
    item.classList.remove("active");
  });

  // Activate selected view
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.classList.add("active");
    // Scroll view to top
    targetView.scrollTop = 0;
  }

  // Highlight all navbar links corresponding to active view
  document.querySelectorAll(`[data-view="${viewId}"]`).forEach(el => {
    el.classList.add("active");
  });

  // Special hooks on entering view
  if (viewId === "reels") {
    playVisibleReel();
  } else {
    pauseAllReels();
  }
  
  if (viewId === "profile") {
    renderProfileView();
  }
  
  if (viewId === "messages") {
    renderChatsList();
    // Scroll active chat stream down
    const activeChat = document.querySelector(".chat-user-row.active");
    if (activeChat) {
      scrollChatToBottom();
    }
  }
}


// --- STORIES PRESENTATION MODULE ---
let activeStoryIndex = 0;
let activeSlideIndex = 0;
let storyProgressTimer = null;
const STORY_DURATION = 4000; // 4 seconds per story slide

function renderStoriesPanel() {
  const container = document.getElementById("stories-container");
  if (!container) return;

  container.innerHTML = `
    <!-- User Personal Story Add Button -->
    <div class="story-card" id="user-story-add-card">
      <div class="story-avatar-container" style="background: var(--border-color);">
        <img src="${state.currentUser.avatar}" alt="My Avatar" class="story-avatar currentUserAvatar">
        <div class="story-badge"><i class="fa-solid fa-plus"></i></div>
      </div>
      <span class="story-name">Your Story</span>
    </div>
  `;

  // Append other users' stories
  state.stories.forEach((story, idx) => {
    const card = document.createElement("div");
    card.className = `story-card ${story.read ? 'read' : ''}`;
    card.innerHTML = `
      <div class="story-avatar-container">
        <img src="${story.authorAvatar}" alt="${story.authorName}" class="story-avatar">
      </div>
      <span class="story-name">${story.authorName}</span>
    `;
    card.addEventListener("click", () => {
      openStoryViewer(idx);
    });
    container.appendChild(card);
  });

  // User story click opens dialog
  document.getElementById("user-story-add-card").addEventListener("click", () => {
    openCreateModal();
    // Switch post selector in uploader to story if available (simulated as post)
  });
}

function openStoryViewer(storyIdx) {
  activeStoryIndex = storyIdx;
  activeSlideIndex = 0;
  
  const viewer = document.getElementById("story-viewer");
  if (!viewer) return;

  viewer.style.display = "flex";
  
  // Set story as read
  state.stories[storyIdx].read = true;
  saveAppState();
  renderStoriesPanel();

  showStorySlide();
}

function closeStoryViewer() {
  const viewer = document.getElementById("story-viewer");
  if (viewer) viewer.style.display = "none";
  clearTimeout(storyProgressTimer);
}

function showStorySlide() {
  const story = state.stories[activeStoryIndex];
  if (!story) {
    closeStoryViewer();
    return;
  }

  // Update headers
  document.getElementById("story-author-img").src = story.authorAvatar;
  document.getElementById("story-author-name").textContent = story.authorName;
  document.getElementById("story-media-content").src = story.slides[activeSlideIndex];

  // Render story indicator segments
  const progressBars = document.getElementById("story-progress-indicators");
  progressBars.innerHTML = "";
  story.slides.forEach((_, sIdx) => {
    const track = document.createElement("div");
    track.className = "story-progress-track";
    const fill = document.createElement("div");
    fill.className = "story-progress-fill";
    
    if (sIdx < activeSlideIndex) {
      fill.style.width = "100%";
    } else if (sIdx === activeSlideIndex) {
      fill.style.width = "0%";
      // Animate current active bar
      setTimeout(() => {
        fill.style.transition = `width ${STORY_DURATION}ms linear`;
        fill.style.width = "100%";
      }, 50);
    } else {
      fill.style.width = "0%";
    }
    track.appendChild(fill);
    progressBars.appendChild(track);
  });

  // Trigger timer to advance slide
  clearTimeout(storyProgressTimer);
  storyProgressTimer = setTimeout(() => {
    advanceStory(1);
  }, STORY_DURATION);
}

function advanceStory(direction) {
  const story = state.stories[activeStoryIndex];
  if (!story) return;

  activeSlideIndex += direction;

  if (activeSlideIndex >= story.slides.length) {
    // Move to next story
    activeStoryIndex += 1;
    activeSlideIndex = 0;
    if (activeStoryIndex >= state.stories.length) {
      // Finished all stories
      closeStoryViewer();
      return;
    }
  } else if (activeSlideIndex < 0) {
    // Go to previous story
    activeStoryIndex -= 1;
    if (activeStoryIndex < 0) {
      // Beginning of stories
      activeStoryIndex = 0;
      activeSlideIndex = 0;
    } else {
      activeSlideIndex = state.stories[activeStoryIndex].slides.length - 1;
    }
  }

  showStorySlide();
}

// Bind story viewer controllers
function setupStoryViewerControls() {
  document.getElementById("story-close-btn").addEventListener("click", closeStoryViewer);
  document.getElementById("story-prev-btn").addEventListener("click", () => advanceStory(-1));
  document.getElementById("story-next-btn").addEventListener("click", () => advanceStory(1));

  // Also support clicking left / right half of story media to go back / forward
  const mediaContainer = document.querySelector(".story-viewer-content");
  mediaContainer.addEventListener("click", (e) => {
    const rect = mediaContainer.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within container
    if (x < rect.width / 3) {
      advanceStory(-1);
    } else {
      advanceStory(1);
    }
  });
}


// --- HOME POSTS STREAM FEED ---
function renderHomeFeed() {
  const container = document.getElementById("posts-container");
  if (!container) return;

  container.innerHTML = "";

  if (state.posts.length === 0) {
    container.innerHTML = `
      <div class="glass-panel" style="padding: 40px; text-align: center; color: var(--text-secondary);">
        <i class="fa-regular fa-images" style="font-size: 48px; margin-bottom: 16px; color: var(--color-accent-purple);"></i>
        <h3>No Posts Yet</h3>
        <p style="font-size: 13px; margin-top: 8px;">Be the first to share a moment! Click "Create" in the sidebar.</p>
      </div>
    `;
    return;
  }

  state.posts.forEach(post => {
    const card = document.createElement("article");
    card.className = "post-card glass-panel glass-panel-hover";
    
    // Build Comments HTML
    let commentsHTML = "";
    post.comments.forEach(c => {
      commentsHTML += `
        <div class="post-comment-item">
          <span class="comment-username">${c.username}</span>
          <span class="comment-text">${c.text}</span>
        </div>
      `;
    });

    card.innerHTML = `
      <!-- Header -->
      <div class="post-header">
        <div class="post-author-info">
          <img src="${post.authorAvatar}" alt="${post.authorName}" class="post-author-avatar">
          <div>
            <div class="post-author-name">${post.authorName}</div>
            <div class="post-author-location">${post.location || 'Global'}</div>
          </div>
        </div>
        <button class="post-action-menu"><i class="fa-solid fa-ellipsis"></i></button>
      </div>

      <!-- Media viewport -->
      <div class="post-media-container" id="media-viewport-${post.id}">
        <img src="${post.image}" alt="Post Media" class="post-image" style="${post.filterStyle || ''}">
        <i class="fa-solid fa-heart double-click-heart" id="overlay-heart-${post.id}"></i>
      </div>

      <!-- Actions Bar -->
      <div class="post-actions">
        <div class="post-actions-left">
          <button class="post-action-btn ${post.liked ? 'liked' : ''}" id="like-btn-${post.id}">
            <i class="${post.liked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
          </button>
          <button class="post-action-btn" id="comment-trigger-${post.id}">
            <i class="fa-regular fa-comment"></i>
          </button>
          <button class="post-action-btn"><i class="fa-regular fa-paper-plane"></i></button>
        </div>
        <button class="post-action-btn ${post.bookmarked ? 'bookmarked' : ''}" id="save-btn-${post.id}">
          <i class="${post.bookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
        </button>
      </div>

      <!-- Text details & expandables -->
      <div class="post-info-panel">
        <div class="post-likes-count" id="likes-count-${post.id}">${post.likes.toLocaleString()} likes</div>
        <div class="post-caption">
          <span class="post-caption-author">${post.authorHandle}</span>${post.caption}
        </div>
        
        ${post.comments.length > 0 ? `<div class="post-comments-view-trigger" id="comment-expand-${post.id}">View all ${post.comments.length} comments</div>` : ''}
        
        <div class="post-comments-drawer" id="comments-drawer-${post.id}">
          ${commentsHTML}
        </div>
        
        <div class="post-date">${post.time || 'JUST NOW'}</div>
      </div>

      <!-- Comment composer -->
      <div class="comment-input-area">
        <button class="comment-emoji-btn"><i class="fa-regular fa-face-smile"></i></button>
        <input type="text" placeholder="Add a comment..." class="comment-text-input" id="comment-input-${post.id}">
        <button class="comment-submit-btn" id="comment-submit-${post.id}">Post</button>
      </div>
    `;

    // Connect event listeners for card elements
    container.appendChild(card);
    bindPostCardListeners(post);
  });
}

function bindPostCardListeners(post) {
  const pId = post.id;
  const cardImgContainer = document.getElementById(`media-viewport-${pId}`);
  const likeBtn = document.getElementById(`like-btn-${pId}`);
  const saveBtn = document.getElementById(`save-btn-${pId}`);
  const commentTrigger = document.getElementById(`comment-trigger-${pId}`);
  const commentInput = document.getElementById(`comment-input-${pId}`);
  const commentSubmit = document.getElementById(`comment-submit-${pId}`);
  const commentExpandTrigger = document.getElementById(`comment-expand-${pId}`);
  const commentsDrawer = document.getElementById(`comments-drawer-${pId}`);

  // Heart like actions
  likeBtn.addEventListener("click", () => toggleLikePost(post));
  
  // Double tap to like
  let lastTap = 0;
  cardImgContainer.addEventListener("click", (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 300 && tapLength > 0) {
      // Trigger double click heart pop
      triggerDoubleClickHeart(pId);
      if (!post.liked) {
        toggleLikePost(post);
      }
    }
    lastTap = currentTime;
  });

  // Bookmark actions
  saveBtn.addEventListener("click", () => {
    post.bookmarked = !post.bookmarked;
    saveAppState();
    saveBtn.classList.toggle("bookmarked");
    const saveIcon = saveBtn.querySelector("i");
    if (post.bookmarked) {
      saveIcon.className = "fa-solid fa-bookmark";
    } else {
      saveIcon.className = "fa-regular fa-bookmark";
    }
  });

  // Focus comment input on icon click
  commentTrigger.addEventListener("click", () => commentInput.focus());

  // Show / Hide comments drawer
  if (commentExpandTrigger && commentsDrawer) {
    commentExpandTrigger.addEventListener("click", () => {
      commentsDrawer.classList.toggle("open");
      if (commentsDrawer.classList.contains("open")) {
        commentExpandTrigger.textContent = "Hide comments";
      } else {
        commentExpandTrigger.textContent = `View all ${post.comments.length} comments`;
      }
    });
  }

  // Handle posting comments
  commentSubmit.addEventListener("click", () => submitComment(post));
  commentInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && commentInput.value.trim() !== "") {
      submitComment(post);
    }
  });
}

function toggleLikePost(post) {
  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;
  saveAppState();

  const likeBtn = document.getElementById(`like-btn-${post.id}`);
  const likesCount = document.getElementById(`likes-count-${post.id}`);
  const heartIcon = likeBtn.querySelector("i");

  likesCount.textContent = `${post.likes.toLocaleString()} likes`;

  if (post.liked) {
    likeBtn.classList.add("liked");
    heartIcon.className = "fa-solid fa-heart";
  } else {
    likeBtn.classList.remove("liked");
    heartIcon.className = "fa-regular fa-heart";
  }
}

function triggerDoubleClickHeart(postId) {
  const heartOverlay = document.getElementById(`overlay-heart-${postId}`);
  if (!heartOverlay) return;

  heartOverlay.classList.remove("pop");
  void heartOverlay.offsetWidth; // Trigger reflow to restart animation
  heartOverlay.classList.add("pop");
}

function submitComment(post) {
  const commentInput = document.getElementById(`comment-input-${post.id}`);
  const commentVal = commentInput.value.trim();
  if (!commentVal) return;

  const newComment = {
    username: state.currentUser.username,
    text: commentVal
  };

  post.comments.push(newComment);
  saveAppState();

  // Clear inputs
  commentInput.value = "";

  // Refresh feed or insert comments directly to update visual representation smoothly
  renderHomeFeed();
}

function renderSuggestionsPanel() {
  const container = document.getElementById("suggestions-list");
  if (!container) return;

  container.innerHTML = "";

  // Generate 3 suggested users (some of the contacts or extra mock users)
  const recommendations = [
    { name: "Elena Rostova", handle: "@elena_r", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80", relation: "Popular" },
    { name: "Kai Sato", handle: "@kai_sato", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80", relation: "Followed by aria_design" },
    { name: "Maya Patel", handle: "@maya_patel", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80", relation: "New to PixelFlow" }
  ];

  recommendations.forEach(rec => {
    const row = document.createElement("div");
    row.className = "suggestion-row";
    row.innerHTML = `
      <div class="suggestion-profile">
        <img src="${rec.avatar}" alt="${rec.name}" class="suggestion-avatar">
        <div class="sidebar-user-info">
          <span class="suggestion-name">${rec.name}</span>
          <span class="suggestion-relation">${rec.relation}</span>
        </div>
      </div>
      <button class="suggestion-follow-btn">Follow</button>
    `;

    const followBtn = row.querySelector(".suggestion-follow-btn");
    followBtn.addEventListener("click", function() {
      this.classList.toggle("following");
      if (this.classList.contains("following")) {
        this.textContent = "Following";
        this.style.color = "var(--text-muted)";
      } else {
        this.textContent = "Follow";
        this.style.color = "var(--color-accent-teal)";
      }
    });

    container.appendChild(row);
  });
}


// --- IMMERSIVE REELS CONTROLLER ---
let isMuted = true; // Default standard autoplay behaviors

function renderReelsFeed() {
  const container = document.getElementById("reels-feed-container");
  if (!container) return;

  container.innerHTML = "";

  state.reels.forEach((reel, idx) => {
    const item = document.createElement("div");
    item.className = "reel-item";
    item.setAttribute("data-index", idx);
    
    item.innerHTML = `
      <!-- Video node -->
      <video class="reel-video" loop playsinline src="${reel.videoUrl}"></video>
      
      <!-- Overlay controls/labels -->
      <div class="reel-overlay">
        <!-- Top header row -->
        <div class="reel-top-row">
          <div class="reel-logo">Reels</div>
          <button class="reel-sound-toggle" id="reel-mute-${reel.id}">
            <i class="fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}"></i>
          </button>
        </div>
        
        <!-- Bottom text details -->
        <div class="reel-bottom-row">
          <div class="reel-info-pane">
            <div class="reel-author">
              <img src="${reel.authorAvatar}" alt="${reel.authorName}" class="reel-author-avatar">
              <span class="reel-author-name">${reel.authorName}</span>
              <button class="reel-follow-badge">Follow</button>
            </div>
            <p class="reel-caption">${reel.caption}</p>
            <div class="reel-music-tag">
              <i class="fa-solid fa-music"></i>
              <span>${reel.musicName}</span>
            </div>
          </div>
          
          <!-- Interaction widgets -->
          <div class="reel-actions-pane">
            <div class="reel-action-item" id="reel-like-btn-${reel.id}">
              <div class="reel-action-btn-circle ${reel.liked ? 'liked' : ''}">
                <i class="${reel.liked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
              </div>
              <span class="reel-action-label">${reel.likes}</span>
            </div>
            <div class="reel-action-item">
              <div class="reel-action-btn-circle">
                <i class="fa-regular fa-comment"></i>
              </div>
              <span class="reel-action-label">${reel.commentsCount}</span>
            </div>
            <div class="reel-action-item">
              <div class="reel-action-btn-circle">
                <i class="fa-regular fa-paper-plane"></i>
              </div>
            </div>
            <div class="reel-action-item">
              <div class="reel-audio-disk">
                <img src="${reel.audioDiskImg}" alt="music disc" class="reel-audio-disk-img">
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Video player status indicator -->
      <div class="reel-play-indicator" id="play-indicator-${reel.id}">
        <i class="fa-solid fa-play"></i>
      </div>
      
      <!-- Big Double Tap Heart -->
      <i class="fa-solid fa-heart double-click-heart" id="reel-overlay-heart-${reel.id}" style="font-size: 90px;"></i>
    `;

    // Events attachment
    container.appendChild(item);
    bindReelEventListeners(reel, item);
  });

  // Initialize IntersectionObserver to trigger play when reel snaps in
  setupReelIntersectionObserver();
}

function bindReelEventListeners(reel, itemNode) {
  const rId = reel.id;
  const video = itemNode.querySelector("video");
  const muteBtn = itemNode.querySelector(`.reel-sound-toggle`);
  const likeBtn = itemNode.querySelector(`#reel-like-btn-${rId}`);
  const heartOverlay = itemNode.querySelector(`#reel-overlay-heart-${rId}`);
  const playIndicator = itemNode.querySelector(`#play-indicator-${rId}`);
  
  // Set initial mute states
  video.muted = isMuted;

  // Toggle Mute globally
  muteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    isMuted = !isMuted;
    
    // Apply state across all reels
    document.querySelectorAll(".reel-video").forEach(v => {
      v.muted = isMuted;
    });
    
    // Update all button icons
    document.querySelectorAll(".reel-sound-toggle i").forEach(icon => {
      icon.className = `fa-solid ${isMuted ? 'fa-volume-xmark' : 'fa-volume-high'}`;
    });
  });

  // Tap video viewport to Play/Pause
  itemNode.addEventListener("click", (e) => {
    // Make sure we didn't click inside action overlay elements
    if (e.target.closest('.reel-actions-pane') || e.target.closest('.reel-top-row') || e.target.closest('.reel-info-pane')) {
      return;
    }
    
    const playIndicatorIcon = playIndicator.querySelector("i");
    if (video.paused) {
      video.play();
      playIndicatorIcon.className = "fa-solid fa-play";
    } else {
      video.pause();
      playIndicatorIcon.className = "fa-solid fa-pause";
    }
    
    // Flash overlay indicator
    playIndicator.classList.remove("flash");
    void playIndicator.offsetWidth; // Trigger reflow
    playIndicator.classList.add("flash");
  });

  // Double tap to Like
  let lastTap = 0;
  itemNode.addEventListener("click", (e) => {
    if (e.target.closest('.reel-actions-pane') || e.target.closest('.reel-top-row') || e.target.closest('.reel-info-pane')) {
      return;
    }
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 300 && tapLength > 0) {
      // Like triggers
      if (!reel.liked) {
        toggleLikeReel(reel, likeBtn);
      }
      // Trigger heart pop
      heartOverlay.classList.remove("pop");
      void heartOverlay.offsetWidth;
      heartOverlay.classList.add("pop");
    }
    lastTap = currentTime;
  });

  // Follow Button trigger
  const followBtn = itemNode.querySelector(".reel-follow-badge");
  followBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    this.classList.toggle("following");
    if (this.classList.contains("following")) {
      this.textContent = "Following";
      this.style.background = "rgba(255,255,255,0.2)";
      this.style.borderColor = "transparent";
    } else {
      this.textContent = "Follow";
      this.style.background = "transparent";
      this.style.borderColor = "white";
    }
  });

  // Right menu likes click
  likeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleLikeReel(reel, likeBtn);
  });
}

function toggleLikeReel(reel, likeBtnNode) {
  reel.liked = !reel.liked;
  saveAppState();

  const heartCircle = likeBtnNode.querySelector(".reel-action-btn-circle");
  const heartIcon = heartCircle.querySelector("i");
  const countLabel = likeBtnNode.querySelector(".reel-action-label");

  // Format increment count simply for mock UI
  let countVal = parseFloat(reel.likes);
  if (isNaN(countVal)) countVal = 10;
  
  if (reel.liked) {
    heartCircle.classList.add("liked");
    heartIcon.className = "fa-solid fa-heart";
    countLabel.textContent = (countVal + 0.1).toFixed(1) + "k";
  } else {
    heartCircle.classList.remove("liked");
    heartIcon.className = "fa-regular fa-heart";
    countLabel.textContent = reel.likes;
  }
}

let reelsObserver = null;
function setupReelIntersectionObserver() {
  if (reelsObserver) reelsObserver.disconnect();

  const options = {
    root: document.getElementById("reels-feed-container"),
    rootMargin: "0px",
    threshold: 0.6 // Reel must be 60% visible to autoplay
  };

  reelsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target.querySelector("video");
      if (entry.isIntersecting) {
        // Play visible reel
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log("Autoplay blocked by browser policy, awaiting interaction.");
          });
        }
      } else {
        // Pause hidden reels
        video.pause();
      }
    });
  }, options);

  // Monitor all reel elements
  document.querySelectorAll(".reel-item").forEach(item => {
    reelsObserver.observe(item);
  });
}

function playVisibleReel() {
  const container = document.getElementById("reels-feed-container");
  if (!container) return;

  // Find reel element currently scrolled into viewport
  const containerHeight = container.clientHeight;
  const scrollTop = container.scrollTop;
  const scrollIndex = Math.round(scrollTop / containerHeight);

  const activeReel = document.querySelector(`.reel-item[data-index="${scrollIndex}"]`);
  if (activeReel) {
    const video = activeReel.querySelector("video");
    if (video && video.paused) {
      video.muted = isMuted;
      video.play().catch(e => {});
    }
  }
}

function pauseAllReels() {
  document.querySelectorAll(".reel-video").forEach(v => {
    v.pause();
  });
}


// --- CHATS & MESSAGES MODULE ---
let selectedContactId = null;

function renderChatsList() {
  const container = document.getElementById("chat-friends-list");
  if (!container) return;

  container.innerHTML = "";

  state.contacts.forEach(contact => {
    // Get last message in thread
    const thread = state.messages[contact.id] || [];
    const lastMsg = thread.length > 0 ? thread[thread.length - 1] : { text: "No messages yet", time: "" };
    
    const row = document.createElement("div");
    row.className = `chat-user-row ${selectedContactId === contact.id ? 'active' : ''}`;
    row.id = `chat-row-${contact.id}`;
    
    row.innerHTML = `
      <div class="chat-avatar-frame">
        <img src="${contact.avatar}" alt="${contact.name}" class="chat-row-avatar">
        <div class="status-dot ${contact.status === 'online' ? 'online' : ''}"></div>
      </div>
      <div class="chat-row-details">
        <div class="chat-row-header">
          <span class="chat-row-name">${contact.name}</span>
          <span class="chat-row-time">${lastMsg.time}</span>
        </div>
        <div class="chat-row-preview-row">
          <span class="chat-row-preview">${lastMsg.sender === 'user' ? 'You: ' : ''}${lastMsg.text}</span>
          ${contact.unreadCount > 0 ? `<div class="chat-unread-badge">${contact.unreadCount}</div>` : ''}
        </div>
      </div>
    `;

    row.addEventListener("click", () => {
      selectConversation(contact.id);
    });

    container.appendChild(row);
  });
}

function selectConversation(contactId) {
  selectedContactId = contactId;
  
  // Clear unreads
  const contact = state.contacts.find(c => c.id === contactId);
  if (contact) {
    contact.unreadCount = 0;
    saveAppState();
  }

  // Toggle active styling rows
  document.querySelectorAll(".chat-user-row").forEach(row => {
    row.classList.remove("active");
  });
  const activeRow = document.getElementById(`chat-row-${contactId}`);
  if (activeRow) activeRow.classList.add("active");

  // Show conversation layout
  document.getElementById("chat-welcome-screen").style.display = "none";
  document.getElementById("chat-active-screen").style.display = "flex";

  // Load chat header details
  document.getElementById("active-chat-img").src = contact.avatar;
  document.getElementById("active-chat-name").textContent = contact.name;
  
  const statusLbl = document.getElementById("active-chat-status");
  statusLbl.textContent = contact.status === "online" ? "Online" : "Offline";
  if (contact.status === "online") {
    statusLbl.className = "active-chat-status online";
  } else {
    statusLbl.className = "active-chat-status";
  }

  // Render chat messages
  renderMessagesStream();
  renderChatsList(); // Refresh list to update badge counts
}

function renderMessagesStream() {
  const container = document.getElementById("chat-messages-stream");
  if (!container) return;

  container.innerHTML = "";

  const thread = state.messages[selectedContactId] || [];
  thread.forEach(msg => {
    const wrapper = document.createElement("div");
    wrapper.className = `message-bubble-wrapper ${msg.sender === 'user' ? 'sent' : 'received'}`;
    
    wrapper.innerHTML = `
      <div class="message-bubble">
        <div>${msg.text}</div>
        <div class="message-time">${msg.time}</div>
      </div>
    `;
    
    container.appendChild(wrapper);
  });

  scrollChatToBottom();
}

function scrollChatToBottom() {
  const container = document.getElementById("chat-messages-stream");
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

// Sending Messages
function handleSendMessage() {
  const composer = document.getElementById("chat-composer-input");
  const text = composer.value.trim();
  if (!text || !selectedContactId) return;

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  // Add users message to state
  if (!state.messages[selectedContactId]) {
    state.messages[selectedContactId] = [];
  }
  
  state.messages[selectedContactId].push({
    sender: "user",
    text: text,
    time: timeStr
  });
  
  saveAppState();
  composer.value = "";
  renderMessagesStream();
  renderChatsList(); // Update sidebar last text preview

  // Trigger friend dynamic reply after 1.5s delay
  triggerMockFriendResponse(selectedContactId, text);
}

// Context-aware auto replies from friends
function triggerMockFriendResponse(contactId, userText) {
  const indicator = document.getElementById("typing-indicator-container");
  if (indicator) indicator.style.display = "block";
  scrollChatToBottom();

  setTimeout(() => {
    // Hide indicator
    if (indicator) indicator.style.display = "none";

    const friend = state.contacts.find(c => c.id === contactId);
    let replyText = "Awesome! Let's talk more about this later.";
    
    const cleanText = userText.toLowerCase();

    // Contextual responses based on friend identity
    if (contactId === "aria") {
      if (cleanText.includes("shoot") || cleanText.includes("camera") || cleanText.includes("photo") || cleanText.includes("fuji")) {
        replyText = "Fuji color tones are just amazing! We should definitely plan a photowalk around SF next weekend. 📸 Let me know what time works!";
      } else if (cleanText.includes("design") || cleanText.includes("logo") || cleanText.includes("portfolio")) {
        replyText = "I'd love to review your latest designs! Send over a link when you can. 🎨";
      } else {
        replyText = "Ooh, interesting! Hey, by the way, did you check out the new design system proposal I posted? 😊";
      }
    } else if (contactId === "zara") {
      if (cleanText.includes("amalfi") || cleanText.includes("italy") || cleanText.includes("boat") || cleanText.includes("reunion")) {
        replyText = "Yesss! The Amalfi trip is going to be so epic. 🍋 We are chartering a catamaran for Wednesday! Are you in?";
      } else if (cleanText.includes("video") || cleanText.includes("vlog") || cleanText.includes("camera") || cleanText.includes("edit")) {
        replyText = "I'm editing the new travel vlog now, exporting in 4K. Finding the right audio tracks is taking forever though! 🎧";
      } else {
        replyText = "Totally agree! Travel always shifts your perspective. Where are you heading next? 🗺️";
      }
    } else if (contactId === "liam") {
      if (cleanText.includes("cyberpunk") || cleanText.includes("blender") || cleanText.includes("render") || cleanText.includes("art")) {
        replyText = "Render times were crazy, but worth it. I'm working on a new mechanical mech model today. Will share a wireframe soon! 🤖";
      } else {
        replyText = "Nice! Hey, let's catch up on discord later tonight, I want to show you this new generative AI shader I coded.";
      }
    }

    const now = new Date();
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    state.messages[contactId].push({
      sender: "friend",
      text: replyText,
      time: timeStr
    });

    saveAppState();
    
    // Check if we are still active on this thread
    if (selectedContactId === contactId) {
      renderMessagesStream();
    } else {
      // Increment unread count if user shifted chats
      friend.unreadCount = (friend.unreadCount || 0) + 1;
      saveAppState();
      renderChatsList();
    }
  }, 2000);
}

function setupMessageComposer() {
  const sendBtn = document.getElementById("chat-send-trigger");
  const composer = document.getElementById("chat-composer-input");

  if (sendBtn && composer) {
    sendBtn.addEventListener("click", handleSendMessage);
    composer.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    });
  }
}


// --- CREATION MODAL & IMAGE FILTER HANDLERS ---
let selectedMediaBase64 = null;
let selectedMediaType = "photo";

const defaultFilterVals = {
  brightness: 100,
  contrast: 100,
  saturation: 100,
  sepia: 0
};
let activeFilterSettings = { ...defaultFilterVals };
let activePresetName = "none";

function openCreateModal() {
  const modal = document.getElementById("create-modal-overlay");
  if (modal) {
    modal.classList.add("open");
    resetCreateForm();
  }
}

function closeCreateModal() {
  const modal = document.getElementById("create-modal-overlay");
  if (modal) modal.classList.remove("open");
}

function resetCreateForm() {
  selectedMediaBase64 = null;
  selectedMediaType = "photo";
  activeFilterSettings = { ...defaultFilterVals };
  activePresetName = "none";

  document.getElementById("create-caption-input").value = "";
  document.getElementById("create-location-input").value = "";
  document.getElementById("create-type-input").value = "photo";
  
  const uploadZone = document.getElementById("upload-zone");
  uploadZone.style.borderColor = "rgba(255, 255, 255, 0.15)";
  uploadZone.style.background = "rgba(255, 255, 255, 0.02)";
  
  const instruction = document.getElementById("upload-instruction");
  instruction.style.display = "block";
  instruction.textContent = "Drag photos/videos here or click to browse";
  
  const preview = document.getElementById("media-preview-container");
  preview.style.display = "none";
  preview.src = "";
  preview.style.filter = "";

  document.getElementById("photo-filters-panel").style.display = "none";
  
  // Reset sliders
  updateFilterSlidersUI();
}

function handleMediaSelect(file) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    selectedMediaBase64 = e.target.result;
    
    const preview = document.getElementById("media-preview-container");
    const instruction = document.getElementById("upload-instruction");
    const typeSelect = document.getElementById("create-type-input");

    preview.src = selectedMediaBase64;
    preview.style.display = "block";
    instruction.style.display = "none";

    // Auto-detect type
    if (file.type.startsWith("video/")) {
      selectedMediaType = "reel";
      typeSelect.value = "reel";
      document.getElementById("photo-filters-panel").style.display = "none";
    } else {
      selectedMediaType = "photo";
      typeSelect.value = "photo";
      
      // Populate preset thumb images with actual selected image
      document.querySelectorAll(".filter-preset-thumb").forEach(thumb => {
        thumb.src = selectedMediaBase64;
      });
      document.getElementById("photo-filters-panel").style.display = "flex";
    }
  };
  reader.readAsDataURL(file);
}

function updateLivePreviewFilter() {
  const preview = document.getElementById("media-preview-container");
  if (!preview) return;

  let filterStr = "";
  
  // Apply preset filter class prefix properties
  if (activePresetName === "vintage") {
    filterStr += "sepia(0.5) contrast(1.2) brightness(0.95) saturate(1.1) ";
  } else if (activePresetName === "warm") {
    filterStr += "sepia(0.2) saturate(1.4) hue-rotate(-10deg) ";
  } else if (activePresetName === "cool") {
    filterStr += "saturate(0.8) hue-rotate(15deg) contrast(1.1) ";
  } else if (activePresetName === "grayscale") {
    filterStr += "grayscale(1) ";
  } else if (activePresetName === "dramatic") {
    filterStr += "contrast(1.4) brightness(0.85) saturate(0.8) ";
  }

  // Append manual slider adjustments
  filterStr += `brightness(${activeFilterSettings.brightness}%) `;
  filterStr += `contrast(${activeFilterSettings.contrast}%) `;
  filterStr += `saturate(${activeFilterSettings.saturation}%) `;
  filterStr += `sepia(${activeFilterSettings.sepia}%)`;

  preview.style.filter = filterStr;
}

function updateFilterSlidersUI() {
  document.getElementById("slider-brightness").value = activeFilterSettings.brightness;
  document.getElementById("val-brightness").textContent = `${activeFilterSettings.brightness}%`;
  
  document.getElementById("slider-contrast").value = activeFilterSettings.contrast;
  document.getElementById("val-contrast").textContent = `${activeFilterSettings.contrast}%`;
  
  document.getElementById("slider-saturation").value = activeFilterSettings.saturation;
  document.getElementById("val-saturation").textContent = `${activeFilterSettings.saturation}%`;
  
  document.getElementById("slider-sepia").value = activeFilterSettings.sepia;
  document.getElementById("val-sepia").textContent = `${activeFilterSettings.sepia}%`;
}

function setupCreateModalHandlers() {
  const uploadZone = document.getElementById("upload-zone");
  const fileInput = document.getElementById("media-file-input");
  const closeBtn = document.getElementById("close-create-modal");
  const cancelBtn = document.getElementById("cancel-create-btn");
  const publishBtn = document.getElementById("publish-create-btn");
  const typeInput = document.getElementById("create-type-input");

  // Open file dialog on uploader click
  uploadZone.addEventListener("click", () => {
    fileInput.click();
  });

  // Handle Drag & Drop
  uploadZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadZone.style.borderColor = "var(--color-accent-pink)";
  });
  uploadZone.addEventListener("dragleave", () => {
    uploadZone.style.borderColor = "rgba(255, 255, 255, 0.15)";
  });
  uploadZone.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      handleMediaSelect(e.dataTransfer.files[0]);
    }
  });

  // File selected trigger
  fileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleMediaSelect(e.target.files[0]);
    }
  });

  // Cancel triggers
  closeBtn.addEventListener("click", closeCreateModal);
  cancelBtn.addEventListener("click", closeCreateModal);

  // Type Selector Toggle
  typeInput.addEventListener("change", (e) => {
    selectedMediaType = e.target.value;
    if (selectedMediaType === "photo" && selectedMediaBase64) {
      document.getElementById("photo-filters-panel").style.display = "flex";
    } else {
      document.getElementById("photo-filters-panel").style.display = "none";
    }
  });

  // Preset Filters Select
  document.querySelectorAll(".filter-preset-card").forEach(card => {
    card.addEventListener("click", function() {
      document.querySelectorAll(".filter-preset-card").forEach(c => c.classList.remove("active"));
      this.classList.add("active");
      
      activePresetName = this.getAttribute("data-filter");
      updateLivePreviewFilter();
    });
  });

  // Connect Slider sliders
  const sliders = [
    { id: "brightness", prop: "brightness" },
    { id: "contrast", prop: "contrast" },
    { id: "saturation", prop: "saturation" },
    { id: "sepia", prop: "sepia" }
  ];

  sliders.forEach(slider => {
    const el = document.getElementById(`slider-${slider.id}`);
    const label = document.getElementById(`val-${slider.id}`);
    el.addEventListener("input", function() {
      activeFilterSettings[slider.prop] = this.value;
      label.textContent = `${this.value}%`;
      updateLivePreviewFilter();
    });
  });

  // Publish Publish Actions
  publishBtn.addEventListener("click", handlePublishMedia);
}

function handlePublishMedia() {
  if (!selectedMediaBase64) {
    alert("Please select a photo or video to upload first!");
    return;
  }

  const caption = document.getElementById("create-caption-input").value.trim();
  const location = document.getElementById("create-location-input").value.trim();
  
  if (selectedMediaType === "photo") {
    // Compile CSS filter rule string to save
    const preview = document.getElementById("media-preview-container");
    const savedFilterStyle = `filter: ${preview.style.filter};`;

    // Create custom post record
    const newPost = {
      id: `post-${Date.now()}`,
      authorName: state.currentUser.name,
      authorHandle: state.currentUser.handle,
      authorAvatar: state.currentUser.avatar,
      location: location || "California, USA",
      image: selectedMediaBase64,
      caption: caption || "No caption provided.",
      likes: 0,
      liked: false,
      bookmarked: false,
      time: "JUST NOW",
      comments: [],
      filterStyle: savedFilterStyle
    };

    // Prepend to posts stream
    state.posts.unshift(newPost);
    state.currentUser.postsCount += 1;
    saveAppState();

    // Reset views and go back home
    switchView("home");
    renderHomeFeed();
  } else {
    // Create new Reel
    // Note: Video files base64 are very large, so we seed a beautiful visual sample loop in case user upload is slow/broken
    const isBase64Video = selectedMediaBase64.startsWith("data:video/");
    const finalVideoUrl = isBase64Video ? selectedMediaBase64 : "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-ocean-near-a-cliff-43028-large.mp4";

    const newReel = {
      id: `reel-${Date.now()}`,
      authorName: state.currentUser.name,
      authorAvatar: state.currentUser.avatar,
      videoUrl: finalVideoUrl,
      caption: caption || "Check out my new reel! 🚀",
      likes: "0",
      commentsCount: "0",
      musicName: `Original Audio - ${state.currentUser.name}`,
      audioDiskImg: state.currentUser.avatar,
      liked: false
    };

    state.reels.unshift(newReel);
    saveAppState();

    switchView("reels");
    renderReelsFeed();
  }

  closeCreateModal();
}


// --- PROFILE TAB & DETAILS BINDING ---
function renderProfileView() {
  // Update stats counters
  document.getElementById("profile-posts-count").textContent = state.posts.filter(p => p.authorHandle === state.currentUser.handle).length;
  
  // Render user posts grid
  const postsGrid = document.getElementById("profile-posts-grid");
  const reelsGrid = document.getElementById("profile-reels-grid");
  const savedGrid = document.getElementById("profile-saved-grid");

  postsGrid.innerHTML = "";
  reelsGrid.innerHTML = "";
  savedGrid.innerHTML = "";

  const myPosts = state.posts.filter(p => p.authorHandle === state.currentUser.handle);
  myPosts.forEach(post => {
    const item = document.createElement("div");
    item.className = "profile-grid-item";
    item.innerHTML = `
      <img src="${post.image}" alt="Grid Post" class="profile-grid-img" style="${post.filterStyle || ''}">
      <div class="profile-grid-hover">
        <span class="profile-grid-stat"><i class="fa-solid fa-heart"></i> ${post.likes}</span>
        <span class="profile-grid-stat"><i class="fa-solid fa-comment"></i> ${post.comments.length}</span>
      </div>
    `;
    item.addEventListener("click", () => {
      switchView("home");
      // Scroll to post item
      const postCard = document.getElementById(`media-viewport-${post.id}`);
      if (postCard) {
        postCard.scrollIntoView({ behavior: 'smooth' });
      }
    });
    postsGrid.appendChild(item);
  });

  // Populate user reels grid
  const myReels = state.reels.filter(r => r.authorName === state.currentUser.name);
  myReels.forEach(reel => {
    const item = document.createElement("div");
    item.className = "profile-grid-item";
    item.innerHTML = `
      <video src="${reel.videoUrl}" class="profile-grid-video" muted playsinline></video>
      <div class="profile-grid-hover">
        <span class="profile-grid-stat"><i class="fa-solid fa-heart"></i> ${reel.likes}</span>
        <span class="profile-grid-stat"><i class="fa-solid fa-comment"></i> ${reel.commentsCount}</span>
      </div>
    `;
    item.addEventListener("click", () => {
      switchView("reels");
    });
    reelsGrid.appendChild(item);
  });

  // Populate user saved bookmark posts grid
  const savedPosts = state.posts.filter(p => p.bookmarked);
  if (savedPosts.length === 0) {
    savedGrid.innerHTML = `
      <div style="grid-column: span 3; text-align: center; color: var(--text-muted); padding: 40px 0;">
        <i class="fa-regular fa-bookmark" style="font-size: 32px; margin-bottom: 12px;"></i>
        <p>No saved posts yet</p>
      </div>
    `;
  } else {
    savedPosts.forEach(post => {
      const item = document.createElement("div");
      item.className = "profile-grid-item";
      item.innerHTML = `
        <img src="${post.image}" alt="Saved Post" class="profile-grid-img" style="${post.filterStyle || ''}">
        <div class="profile-grid-hover">
          <span class="profile-grid-stat"><i class="fa-solid fa-heart"></i> ${post.likes}</span>
          <span class="profile-grid-stat"><i class="fa-solid fa-comment"></i> ${post.comments.length}</span>
        </div>
      `;
      item.addEventListener("click", () => {
        switchView("home");
        const postCard = document.getElementById(`media-viewport-${post.id}`);
        if (postCard) {
          postCard.scrollIntoView({ behavior: 'smooth' });
        }
      });
      savedGrid.appendChild(item);
    });
  }
}

function setupProfileTabs() {
  const tabs = document.querySelectorAll(".profile-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", function() {
      tabs.forEach(t => t.classList.remove("active"));
      this.classList.add("active");

      const tabTarget = this.getAttribute("data-tab");
      
      const grids = {
        posts: document.getElementById("profile-posts-grid"),
        reels: document.getElementById("profile-reels-grid"),
        saved: document.getElementById("profile-saved-grid")
      };

      // Toggle display of grids
      Object.keys(grids).forEach(key => {
        if (key === tabTarget) {
          grids[key].style.display = "grid";
          grids[key].classList.add("active");
        } else {
          grids[key].style.display = "none";
          grids[key].classList.remove("active");
        }
      });
    });
  });

  // Edit Profile simulated adjustments
  const editProfileBtn = document.getElementById("edit-profile-btn");
  if (editProfileBtn) {
    editProfileBtn.addEventListener("click", () => {
      openSettingsModal();
    });
  }
  
  // Also bind profile view settings cog button
  const cogBtn = document.querySelector("#view-profile .profile-actions-wrapper button:nth-child(2)");
  if (cogBtn) {
    cogBtn.addEventListener("click", () => {
      openSettingsModal();
    });
  }
}

// --- PROFILE SETTINGS MODAL CONTROLLER & DATA SYNC ---
let tempSettingsAvatar = null;

function openSettingsModal() {
  const modal = document.getElementById("settings-modal-overlay");
  const nameInput = document.getElementById("settings-name-input");
  const usernameInput = document.getElementById("settings-username-input");
  const bioInput = document.getElementById("settings-bio-input");
  const avatarPreview = document.getElementById("settings-avatar-preview");
  const errorMsg = document.getElementById("settings-username-error");

  if (!modal) return;

  // Pre-populate fields
  nameInput.value = state.currentUser.name;
  usernameInput.value = state.currentUser.username;
  bioInput.value = state.currentUser.bio;
  avatarPreview.src = state.currentUser.avatar;
  tempSettingsAvatar = state.currentUser.avatar;
  
  errorMsg.style.display = "none";
  modal.classList.add("open");
}

function closeSettingsModal() {
  const modal = document.getElementById("settings-modal-overlay");
  if (modal) {
    modal.classList.remove("open");
  }
}

function syncUserProfileUI() {
  const user = state.currentUser;
  
  // Update images
  document.querySelectorAll(".currentUserAvatar").forEach(el => {
    el.src = user.avatar;
  });
  
  // Update name
  document.querySelectorAll(".currentUserName").forEach(el => {
    el.textContent = user.name;
  });
  
  // Update handle
  document.querySelectorAll(".currentUserHandle").forEach(el => {
    el.textContent = user.handle;
  });
  
  // Update bio in Profile View specifically
  const profileBio = document.getElementById("profile-bio-text");
  if (profileBio) {
    profileBio.innerHTML = user.bio.replace(/\n/g, '<br>');
  }
}

function handleSaveSettings() {
  const nameInput = document.getElementById("settings-name-input");
  const usernameInput = document.getElementById("settings-username-input");
  const bioInput = document.getElementById("settings-bio-input");
  const errorMsg = document.getElementById("settings-username-error");

  let rawUsername = usernameInput.value.trim().toLowerCase();
  if (rawUsername.startsWith("@")) {
    rawUsername = rawUsername.substring(1);
  }

  // Username validation
  if (!rawUsername) {
    errorMsg.textContent = "Username cannot be empty.";
    errorMsg.style.display = "block";
    return;
  }

  const usernameRegex = /^[a-zA-Z0-9_.]+$/;
  if (!usernameRegex.test(rawUsername)) {
    errorMsg.textContent = "Username can only contain letters, numbers, underscores, and periods.";
    errorMsg.style.display = "block";
    return;
  }

  // Backup old values for cascading updates
  const oldHandle = state.currentUser.handle;
  const oldName = state.currentUser.name;
  const oldUsername = state.currentUser.username;

  // Save new values to state
  state.currentUser.name = nameInput.value.trim() || state.currentUser.name;
  state.currentUser.username = rawUsername;
  state.currentUser.handle = "@" + rawUsername;
  state.currentUser.bio = bioInput.value.trim();
  state.currentUser.avatar = tempSettingsAvatar;

  // Cascade changes throughout all feed posts (authored posts & comments)
  state.posts.forEach(post => {
    if (post.authorHandle === oldHandle) {
      post.authorHandle = state.currentUser.handle;
      post.authorName = state.currentUser.name;
      post.authorAvatar = state.currentUser.avatar;
    }
    
    if (post.comments) {
      post.comments.forEach(comment => {
        if (comment.username === oldUsername) {
          comment.username = state.currentUser.username;
        }
      });
    }
  });

  // Cascade changes to reels
  state.reels.forEach(reel => {
    if (reel.authorName === oldName) {
      reel.authorName = state.currentUser.name;
      reel.authorAvatar = state.currentUser.avatar;
      if (reel.musicName.includes("Original Audio - ")) {
        reel.musicName = `Original Audio - ${state.currentUser.name}`;
      }
    }
  });

  // Save updated state & sync UI elements
  saveAppState();
  syncUserProfileUI();

  // Re-render feed elements that display names/avatars/handles
  renderStoriesPanel();
  renderHomeFeed();
  renderSuggestionsPanel();
  renderReelsFeed();
  renderChatsList();
  renderProfileView();

  closeSettingsModal();
}

function setupSettingsModalHandlers() {
  const closeBtn = document.getElementById("close-settings-modal");
  const cancelBtn = document.getElementById("cancel-settings-btn");
  const saveBtn = document.getElementById("save-settings-btn");
  const avatarTrigger = document.getElementById("avatar-picker-trigger");
  const avatarInput = document.getElementById("settings-avatar-file-input");
  const avatarPreview = document.getElementById("settings-avatar-preview");

  if (closeBtn) closeBtn.addEventListener("click", closeSettingsModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeSettingsModal);
  if (saveBtn) saveBtn.addEventListener("click", handleSaveSettings);

  // Trigger file picker
  if (avatarTrigger && avatarInput) {
    avatarTrigger.addEventListener("click", () => {
      avatarInput.click();
    });
  }

  // Handle avatar file selection
  if (avatarInput) {
    avatarInput.addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
          tempSettingsAvatar = event.target.result;
          if (avatarPreview) {
            avatarPreview.src = tempSettingsAvatar;
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Close modal when clicking outside modal-content
  const modal = document.getElementById("settings-modal-overlay");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeSettingsModal();
      }
    });
  }
}


// --- CORE SYSTEM APP INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  // Load State
  initAppStore();
  syncUserProfileUI();

  // Populate UI templates
  renderStoriesPanel();
  renderHomeFeed();
  renderSuggestionsPanel();
  renderReelsFeed();
  renderChatsList();

  // Setup Controller Handles
  setupRouter();
  setupStoryViewerControls();
  setupCreateModalHandlers();
  setupMessageComposer();
  setupProfileTabs();
  setupSettingsModalHandlers();

  // Resize monitor to handle window size adjustments
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      // Make sure we collapse reels views and others safely
    }
  });

  console.log("PixelFlow successfully initialized.");
});
