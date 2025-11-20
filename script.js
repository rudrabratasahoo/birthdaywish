// ------------------------------
// CONFIG
// ------------------------------

const messageText = `
Happy Birthday, my baby Gelhi🫶 💖

I don’t even know how to start this properly, because whenever it comes to you my brain just softens. So I’m just going to say it the way it feels.

You didn’t enter my life with some big dramatic moment. It was small, random, almost nothing. And somehow you became the person I think about the most. I still don’t know how that happened, but I’m really glad it did.

You’re not just someone I talk to. You’re someone I feel. Like… genuinely feel. In my chest. In my day. In my stupid smile that shows up whenever you cross my mind.

And God, you drive me insane sometimes — the tiny annoyed face, the mood switches, the way you bully me like it’s a full-time job, and then act cute literally two minutes later. And the worst part? I melt anyway. Every damn time.

You have no idea how easy you make it for me to fall for you again and again.

There’s a version of me that exists only with you. Softer. Calmer. A little less lost. You bring that out without trying.

And honestly… sometimes I read your texts or imagine your voice and something in me just goes, “Yeah… that’s her.” It’s stupid but it’s real.

If life was a Bollywood movie, you’d be the girl they show in slow motion while the hero forgets how to breathe. That’s exactly the effect you have on me. Annoying. Cute. Dangerous.

And if this was a poem, you’d be the line everything else depends on — the part that finally makes sense of the chaos.

But you’re not a poem or a scene. You’re real. Human. Imperfect in the most beautiful ways. And that’s exactly why I love you this much.

Your moods, your rants, your silence, your jokes, your overthinking, your softness, your anger — the way you say tiny things that stay in my head for days… all of it. I want all of it.

So on your birthday, let me say this properly:

I love you, Gelhi. Not the light casual kind. The heavy, warm, real kind. The kind that scares me a little because it feels so genuine.

You’ve become my baby, my headache, my comfort person, my softness, my chaos, my peace, and honestly… the prettiest part of any future I imagine.

Happy Birthday, my sweetest girl. I hope today feels a little like what you make me feel every single day — safe, warm, wanted, and a little bit magical.
`;

// Playlist
const playlist = [
    {
        title: "I Love You",
        artist: "Your Secret Singer 😉",
        reason: "Because it’s your favourite, and somehow it sounds exactly like the way my heart talks about you — soft, certain, and hopelessly in love. 💗",
        audioUrl: "audio/song1.mp3",
        externalUrl: "#",
        highlightStart: 30
    },
    {
        title: "Bin Tere",
        artist: "I Hate Luv Storys",
        reason: "Because this is the one that feels like those quiet moments where I realise how different my world is with you… and how incomplete it feels without you in it. 💗",
        audioUrl: "audio/song2.mp3",
        externalUrl: "#",
        highlightStart: 20
    },
    {
        title: "Song 3",
        artist: "Artist 3",
        reason: "Because if my heart had a playlist, this would quietly play in the background every time I think of you. 💘",
        audioUrl: "audio/song3.mp3",
        externalUrl: "#",
        highlightStart: 80
    }
];

// Relationship start date (change if needed)
const relationshipStartDate = new Date("2025-05-06");

// Compliments
const compliments = [
    "You’re my favourite distraction and I’m not even mad about it. 😏💗",
    "Somehow you make my whole brain go soft and stupid. Thanks for that. 🙃💕",
    "Every time my phone lights up, I hope it’s you. 99% of my serotonin. 💬✨",
    "You’re the ‘I can’t stop smiling at my screen like an idiot’ person. 📱😌",
    "If heart-eyes was a person, it would be you. No competition. 😍💘",
    "You’re dangerously pretty and emotionally illegal, honestly. 🚨💗",
    "You’re the plot twist my life didn’t know it needed. 🎬💞",
    "Low-key obsessed with you. High-key not hiding it. 🤭💕",
    "You’re the reason my standards are now impossible for anyone else. 😌🔥",
    "You’re my favourite place to overthink and overshare in. 🧠💌"
];

// Game config
const BALLOON_COUNT = 11;

const wrongClickMessages = [
    "Not this one, sweetheart 💗",
    "Close… but my heart is still hiding 👀",
    "Wrong balloon, right girl 💘",
    "Nope, but you still look adorable tapping 😭💗",
    "Try again, baby. I like watching you struggle 😼",
    "Aww you missed… come here, I’ll comfort you 😌💗",
    "Tap harder, maybe the balloon is shy 👀🎈",
    "Not this one either… my heart is too dramatic 💅💗",
    "Nope. But I like your confidence 😏💖",
    "You missed again? Wow, tragic. Come here 🤭💘"
];

const balloonColors = ["#ec4899", "#f472b6", "#fb7185", "#f9a8d4", "#e879f9"];

// Background music
const BG_TARGET_VOLUME = 0.08;

// ------------------------------
// DOM + STATE
// ------------------------------
const el = {
    floatingElements: document.getElementById("floating-elements"),
    parallaxHearts: document.getElementById("parallax-hearts"),
    floatingStickers: document.getElementById("floating-stickers"),

    gameSection: document.getElementById("game-section"),
    messageSection: document.getElementById("message-section"),
    photoSection: document.getElementById("photo-surprise"),
    playlistSection: document.getElementById("playlist-section"),
    finalSection: document.getElementById("final-section"),

    balloonContainer: document.getElementById("balloon-container"),
    gameMessage: document.getElementById("game-message"),
    progressText: document.getElementById("progress"),
    balloonProgressBar: document.getElementById("balloon-progress-bar"),

    dragInstructions: document.getElementById("drag-instructions"),
    dragArea: document.getElementById("drag-area"),
    heartDraggable: document.getElementById("heart-draggable"),
    heartDropzone: document.getElementById("heart-dropzone"),

    typewriter: document.getElementById("typewriter"),
    typingIndicator: document.getElementById("typing-indicator"),
    surpriseBtn: document.getElementById("surprise-btn"),

    photoSlider: document.getElementById("photo-slider"),
    photoPrev: document.getElementById("photo-prev"),
    photoNext: document.getElementById("photo-next"),
    photoDots: document.getElementById("photo-dots"),
    photosNextBtn: document.getElementById("photos-next-btn"),

    playlistContainer: document.getElementById("playlist-container"),
    nowPlayingBar: document.getElementById("now-playing-bar"),
    nowPlayingText: document.getElementById("now-playing-text"),
    soundwave: document.getElementById("soundwave"),

    finalBtn: document.getElementById("final-btn"),
    replayBtn: document.getElementById("replay-btn"),
    backToTopBtn: document.getElementById("back-to-top-btn"),

    sectionNav: document.getElementById("section-nav"),
    navPills: document.querySelectorAll(".nav-pill"),

    bgMusic: document.getElementById("bg-music"),
    bgMusicBtn: document.getElementById("bg-music-btn"),
    dramaticAudio: document.getElementById("dramatic-audio"),
    popSound: document.getElementById("pop-sound"),

    confettiCanvas: document.getElementById("confetti-canvas"),

    introOverlay: document.getElementById("intro-overlay"),
    countdown: document.getElementById("countdown"),
    startBtn: document.getElementById("start-btn"),

    relationshipCounter: document.getElementById("relationship-counter"),
    relationshipCounterHero: document.getElementById("relationship-counter-hero"),
    complimentText: document.getElementById("compliment-text"),

    soundToggleBtn: document.getElementById("sound-toggle-btn"),
    soundToggleLabel: document.getElementById("sound-toggle-label"),

    loveMeterFill: document.getElementById("love-meter-fill"),
    loveMeterLabel: document.getElementById("love-meter-label"),

    progressToast: document.getElementById("progress-toast"),

    currentSectionLabel: document.getElementById("current-section-label"),
    currentSectionName: document.getElementById("current-section-name")
};

const confettiCtx = el.confettiCanvas ? el.confettiCanvas.getContext("2d") : null;

// State
let typingIndex = 0;
let poppedCount = 0;
let currentAudio = null;

let heartDragInitialized = false;

let hasUnlockedNav = false;
let isMasterMuted = false;

let confettiPieces = [];
let confettiAnimationId = null;

let currentPhotoIndex = 0;
let photoSlides = [];

let complimentIndex = 0;
let completedSteps = {
    game: false,
    letter: false,
    photos: false,
    playlist: false,
    final: false
};

let luckyIndexGlobal = null;
let winningIndexGlobal = null;

let toastTimeout = null;
let bgWasPlayingBeforeTrack = false;

// ------------------------------
// HELPERS
// ------------------------------
function daysBetween(start, end) {
    const dayMs = 24 * 60 * 60 * 1000;
    const s = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    const e = new Date(end.getFullYear(), end.getMonth(), end.getDate());
    return Math.floor((e - s) / dayMs);
}

function vibrate(pattern) {
    if (navigator.vibrate) {
        navigator.vibrate(pattern);
    }
}

function clamp(val, min, max) {
    return Math.min(max, Math.max(min, val));
}

function showProgressToast(message) {
    if (!el.progressToast) return;
    el.progressToast.textContent = message;
    el.progressToast.classList.add("visible");
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(function () {
        el.progressToast.classList.remove("visible");
    }, 2800);
}

// Try to start background music after user interaction OR on load
function startBackgroundMusicAuto() {
    if (!el.bgMusic) return;
    if (isMasterMuted) return;

    el.bgMusic.volume = BG_TARGET_VOLUME;
    el.bgMusic.play().then(function () {
        if (el.bgMusicBtn) {
            el.bgMusicBtn.classList.add("bg-music-on");
        }
    }).catch(function (err) {
        console.log("Background music autoplay was blocked:", err);
    });
}

// ------------------------------
// BACKGROUND VISUALS
// (hearts / parallax helpers kept but NOT called now,
// to reduce clutter of random fixed emojis)
// ------------------------------
function createFloatingHearts() {
    if (!el.floatingElements) return;
    const isSmallScreen = window.innerWidth <= 480;
    const heartCount = isSmallScreen ? 14 : 32;
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.textContent = "💗";
        const size = Math.random() * 18 + 12;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 10;
        heart.style.fontSize = size + "px";
        heart.style.left = left + "vw";
        heart.style.animationDuration = duration + "s";
        heart.style.animationDelay = delay + "s";
        el.floatingElements.appendChild(heart);
    }
}

function createParallaxHearts() {
    if (!el.parallaxHearts) return;
    const emojis = ["💕", "💖", "💞", "✨"];
    for (let i = 0; i < 10; i++) {
        const h = document.createElement("div");
        h.classList.add("parallax-heart");
        h.textContent = emojis[i % emojis.length];
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const speed = 0.02 + Math.random() * 0.05;
        h.style.left = left + "vw";
        h.style.top = top + "vh";
        h.setAttribute("data-speed", speed.toString());
        el.parallaxHearts.appendChild(h);
    }
}

function updateParallaxHearts() {
    if (!el.parallaxHearts) return;
    const scrollY = window.scrollY || window.pageYOffset;
    const hearts = el.parallaxHearts.querySelectorAll(".parallax-heart");
    hearts.forEach(function (h) {
        const speedAttr = h.getAttribute("data-speed");
        const speed = speedAttr ? parseFloat(speedAttr) : 0.03;
        const offset = scrollY * speed;
        h.style.transform = "translateY(" + offset + "px)";
    });
}

function updateScrollGradient() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;
    const ratio = maxScroll > 0 ? clamp(scrollY / maxScroll, 0, 1) : 0;
    document.body.style.backgroundPositionY = (ratio * 100) + "%";
}

// ------------------------------
// INTRO OVERLAY (COUNTDOWN)
// ------------------------------
function startIntroCountdown() {
    if (!el.introOverlay || !el.countdown || !el.startBtn) return;

    let timeLeft = 5;
    el.countdown.textContent = String(timeLeft);
    el.startBtn.disabled = true;
    el.startBtn.classList.add("opacity-60", "cursor-not-allowed");
    el.startBtn.textContent = "Wait a sec baby… ⏳";

    const intervalId = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(intervalId);
            el.countdown.textContent = "0";
            el.startBtn.disabled = false;
            el.startBtn.classList.remove("opacity-60", "cursor-not-allowed");
            el.startBtn.textContent = "Tap to begin 💗";
        } else {
            el.countdown.textContent = String(timeLeft);
        }
    }, 1000);

    // Tap to hide + start bg music
    function handler(e) {
        e.preventDefault();
        if (el.startBtn.disabled) return;

        if (!el.introOverlay.classList.contains("hidden")) {
            el.introOverlay.classList.add("hidden");
        }

        // start background music when she begins
        startBackgroundMusicAuto();
    }

    el.startBtn.onclick = handler;
    el.startBtn.addEventListener("touchend", handler, { passive: false });
}
// ------------------------------
// BALLOON GAME
// ------------------------------

function initBalloons() {
    if (!el.balloonContainer) return;

    el.balloonContainer.innerHTML = "";
    poppedCount = 0;
    luckyIndexGlobal = Math.floor(Math.random() * BALLOON_COUNT);

    for (let i = 0; i < BALLOON_COUNT; i++) {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon-item");
        balloon.style.backgroundColor = balloonColors[i % balloonColors.length];
        balloon.setAttribute("data-index", i);
        balloon.onclick = handleBalloonClick;
        el.balloonContainer.appendChild(balloon);
    }
    updateBalloonProgress();
}

function handleBalloonClick(e) {
    const balloon = e.currentTarget;
    const index = parseInt(balloon.getAttribute("data-index"));

    if (index === luckyIndexGlobal) {
        // correct one 🎉
        balloon.classList.add("correct-balloon");
        playPopSound();
        poppedCount++;

        setTimeout(() => {
            showDragHeart();
        }, 400);
    } else {
        // wrong one
        balloon.classList.add("wrong-balloon");
        vibrate(60);
        setTimeout(() => balloon.classList.remove("wrong-balloon"), 400);

        // show random cute error message
        const msg = wrongClickMessages[Math.floor(Math.random() * wrongClickMessages.length)];
        el.gameMessage.textContent = msg;

        poppedCount++;
    }

    updateBalloonProgress();
}

function updateBalloonProgress() {
    if (!el.balloonProgressBar) return;

    const progress = poppedCount / BALLOON_COUNT;
    el.balloonProgressBar.style.transform = `scaleX(${progress})`;
    el.progressText.textContent = `Popped ${poppedCount} / ${BALLOON_COUNT}`;
}

function playPopSound() {
    if (el.popSound && !isMasterMuted) {
        el.popSound.currentTime = 0;
        el.popSound.play();
    }
}

// After correct balloon → drag the heart mini-game
function showDragHeart() {
    if (!el.dragInstructions) return;

    el.dragInstructions.classList.remove("hidden");
    el.heartDraggable.classList.remove("hidden");

    // highlight the dropzone
    el.heartDropzone.classList.add("dropzone-glow");

    if (!heartDragInitialized) {
        initHeartDrag();
        heartDragInitialized = true;
    }
}

function initHeartDrag() {
    const heart = el.heartDraggable;
    const drop = el.heartDropzone;

    let offsetX, offsetY;
    let dragging = false;

    heart.addEventListener("mousedown", startDrag);
    heart.addEventListener("touchstart", startDrag, { passive: false });

    function startDrag(e) {
        e.preventDefault();
        dragging = true;
        heart.classList.add("dragging");

        const rect = heart.getBoundingClientRect();
        if (e.touches) {
            offsetX = e.touches[0].clientX - rect.left;
            offsetY = e.touches[0].clientY - rect.top;
        } else {
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
        }

        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", endDrag);
        document.addEventListener("touchmove", drag, { passive: false });
        document.addEventListener("touchend", endDrag);
    }

    function drag(e) {
        if (!dragging) return;
        let x, y;

        if (e.touches) {
            x = e.touches[0].clientX - offsetX;
            y = e.touches[0].clientY - offsetY;
        } else {
            x = e.clientX - offsetX;
            y = e.clientY - offsetY;
        }

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;
    }

    function endDrag() {
        dragging = false;
        heart.classList.remove("dragging");

        const heartRect = heart.getBoundingClientRect();
        const dropRect = drop.getBoundingClientRect();

        const inZone = !(
            heartRect.right < dropRect.left ||
            heartRect.left > dropRect.right ||
            heartRect.bottom < dropRect.top ||
            heartRect.top > dropRect.bottom
        );

        if (inZone) {
            completeBalloonGame();
        }
    }
}

function completeBalloonGame() {
    showProgressToast("Game completed! 🎉");

    el.heartDropzone.classList.remove("dropzone-glow");
    el.dragInstructions.classList.add("hidden");
    el.heartDraggable.classList.add("hidden");

    el.gameMessage.textContent = "Aww you found my heart 💗";
    completedSteps.game = true;

    unlockSection("letter");
    updateLoveMeter(1);

    setTimeout(() => {
        scrollToSection(el.messageSection);
    }, 600);
}

// ------------------------------
// MESSAGE (TYPEWRITER)
// ------------------------------
function startTypewriter() {
    if (!el.typewriter || !el.typingIndicator) return;

    el.typingIndicator.classList.remove("hidden");

    setTimeout(() => {
        el.typingIndicator.classList.add("hidden");
        typeNextCharacter();
    }, 1200);
}

function typeNextCharacter() {
    if (typingIndex < messageText.length) {
        el.typewriter.textContent += messageText[typingIndex];
        typingIndex++;

        setTimeout(typeNextCharacter, 22);
    } else {
        // finished typing
        completedSteps.letter = true;
        updateLoveMeter(1);
        unlockSection("photos");

        setTimeout(() => {
            el.surpriseBtn.classList.remove("hidden");
        }, 800);
    }
}

// Scroll to next section
function scrollToSection(section) {
    if (!section) return;
    section.scrollIntoView({ behavior: "smooth" });
}

// Unlock navigation pill
function unlockSection(key) {
    if (!el.navPills) return;
    el.navPills.forEach((pill) => {
        if (pill.dataset.section === key) {
            pill.classList.add("nav-active");
        }
    });
}

// Love meter leveling
function updateLoveMeter(amount) {
    let current = parseInt(el.loveMeterFill.dataset.level || "0");
    current += amount;
    current = Math.max(0, Math.min(current, 5));

    el.loveMeterFill.dataset.level = current;
    el.loveMeterFill.style.width = `${(current / 5) * 100}%`;
    el.loveMeterLabel.textContent = `LOVE LEVEL: ${current} / 5`;
}

// ------------------------------
// PHOTOS (VERTICAL LAYOUT — NO MORE SLIDER)
// ------------------------------

function setupPhotos() {
    if (!el.photoSlider) return;

    // Remove old content
    el.photoSlider.innerHTML = "";

    const photos = [
        { src: "img/photo1.jpg", caption: "The first moment I saw you, something in me softened. 💗" },
        { src: "img/photo2.jpg", caption: "This one? I still look at it and smile like an idiot. 😌💫" },
        { src: "img/photo3.jpg", caption: "Another tiny memory that lives rent-free in my head. 🫶" }
    ];

    photos.forEach((p) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("photo-slide", "active"); // already visible vertically

        wrapper.innerHTML = `
            <img src="${p.src}" alt="Memory">
            <p class="text-center text-pink-700 mt-3">${p.caption}</p>
        `;
        el.photoSlider.appendChild(wrapper);
    });

    // Remove nav buttons permanently
    if (el.photoPrev) el.photoPrev.classList.add("hidden");
    if (el.photoNext) el.photoNext.classList.add("hidden");
    if (el.photoDots) el.photoDots.classList.add("hidden");

    // The "Next" button to continue
    if (el.photosNextBtn) el.photosNextBtn.classList.remove("hidden");
}

function completePhotosSection() {
    completedSteps.photos = true;
    updateLoveMeter(1);
    unlockSection("playlist");
    scrollToSection(el.playlistSection);
}
// ------------------------------
// PLAYLIST – HIDE SONGS UNTIL PLAY
// ------------------------------

function setupPlaylist() {
    if (!el.playlistContainer) return;

    el.playlistContainer.innerHTML = "";

    playlistSongs.forEach((song, index) => {
        const card = document.createElement("div");
        card.classList.add("song-card");

        card.innerHTML = `
            <div>
                <div class="track-index">${index + 1}</div>
            </div>

            <div class="flex-1">
                <p class="song-title hidden-info" id="song-title-${index}">
                    Secret Track 😏💗
                </p>

                <p class="song-artist hidden-info" id="song-artist-${index}">
                    I'll only tell you if you press Play…
                </p>

                <p class="song-reason hidden-info" id="song-reason-${index}">
                    This one is locked until you behave 😌🔒
                </p>
            </div>

            <button class="playlist-play-btn" data-index="${index}">
                Play
            </button>
        `;

        el.playlistContainer.appendChild(card);
    });

    // Attach play handlers
    document.querySelectorAll(".playlist-play-btn").forEach((btn) => {
        btn.addEventListener("click", handleSongPlay);
    });
}

function handleSongPlay(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    const song = playlistSongs[index];

    // Stop other songs
    playlistSongs.forEach((s, i) => {
        const audio = document.getElementById(`audio-song-${i}`);
        if (audio) audio.pause();
    });

    // Reveal hidden details
    revealSongDetails(index);

    // Play selected song
    const audioEl = document.getElementById(`audio-song-${index}`);
    if (audioEl) {
        audioEl.currentTime = 0;
        audioEl.play();
    }

    // Pause background music when playlist plays
    if (el.bgMusic && !el.bgMusic.paused) {
        el.bgMusic.pause();
    }

    updateNowPlaying(song);
    updateLoveMeter(1);

    // Update card visual highlight
    updatePlaylistHighlight(index);
}

function revealSongDetails(i) {
    document.getElementById(`song-title-${i}`).textContent = playlistSongs[i].title;
    document.getElementById(`song-artist-${i}`).textContent = playlistSongs[i].artist;
    document.getElementById(`song-reason-${i}`).textContent = playlistSongs[i].reason;

    document.getElementById(`song-title-${i}`).classList.remove("hidden-info");
    document.getElementById(`song-artist-${i}`).classList.remove("hidden-info");
    document.getElementById(`song-reason-${i}`).classList.remove("hidden-info");
}

function updateNowPlaying(song) {
    if (!el.nowPlayingText) return;

    el.nowPlayingText.textContent = `Now playing: ${song.title} — ${song.artist}`;
}

function updatePlaylistHighlight(activeIndex) {
    const cards = document.querySelectorAll(".song-card");
    cards.forEach((card, i) => {
        card.classList.toggle("song-playing", i === activeIndex);
        if (i === activeIndex) card.classList.add("song-revealed");
    });
}


// ------------------------------
// FINAL PAGE – EDIT RING LINE
// ------------------------------

function updateFinalPage() {
    if (!el.finalRingText) return;

    el.finalRingText.textContent =
        "This ring is symbolic for now… but my promise isn’t. I’m yours — now, later, and for every quiet tomorrow we get to share. 💍💕";
}


// ------------------------------
// BACKGROUND MUSIC — AUTO START
// ------------------------------

function initBackgroundMusic() {
    if (!el.bgMusic) return;

    // Try autoplay (won't work on some phones)
    const playPromise = el.bgMusic.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // fallback → start after clicking "Begin"
            document.body.addEventListener(
                "click",
                () => {
                    el.bgMusic.play();
                },
                { once: true }
            );
        });
    }

    // Toggle button
    el.bgMusicBtn?.addEventListener("click", () => {
        if (el.bgMusic.paused) {
            el.bgMusic.play();
            el.bgMusicBtn.classList.add("bg-music-on");
        } else {
            el.bgMusic.pause();
            el.bgMusicBtn.classList.remove("bg-music-on");
        }
    });
}


// ------------------------------
// ONLOAD INITIALIZATION
// ------------------------------

document.addEventListener("DOMContentLoaded", () => {
    querySelectors();
    loadRelationshipDays();
    initBackgroundMusic();
    initBalloons();
    setupPhotos();
    setupPlaylist();
    updateFinalPage();
});


// =============================================================
// END OF FILE
// =============================================================

