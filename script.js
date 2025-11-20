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

// Try to start background music after user interaction
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
    var handler = function (e) {
        e.preventDefault();
        if (el.startBtn.disabled) return;

        if (!el.introOverlay.classList.contains("hidden")) {
            el.introOverlay.classList.add("hidden");
        }

        startBackgroundMusicAuto();
    };
    el.startBtn.onclick = handler;
    el.startBtn.addEventListener("touchend", handler, { passive: false });
}

// ------------------------------
// GAME PROGRESS + PARTICLES
// ------------------------------
function updateProgress() {
    if (!el.progressText || !el.balloonProgressBar) return;
    el.progressText.textContent = "Popped " + poppedCount + " / " + BALLOON_COUNT;
    const pct = (poppedCount / BALLOON_COUNT) * 100;
    el.balloonProgressBar.style.width = Math.min(100, pct) + "%";
}

function spawnHeartsAt(element) {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 6; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart-particle");
        heart.textContent = "💗";
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;
        heart.style.left = startX + "px";
        heart.style.top = startY + "px";
        document.body.appendChild(heart);
        setTimeout(function () { heart.remove(); }, 600);
    }
}

function spawnMiniConfettiAt(element) {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 10; i++) {
        const piece = document.createElement("div");
        piece.classList.add("mini-confetti");
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;
        piece.style.left = startX + "px";
        piece.style.top = startY + "px";
        piece.style.setProperty("--dx", ((Math.random() - 0.5) * 80) + "px");
        piece.style.setProperty("--dy", (-40 - Math.random() * 60) + "px");
        document.body.appendChild(piece);
        setTimeout(function () { piece.remove(); }, 700);
    }
}

function getHintForDistance(distance) {
    if (distance === 0) {
        return "You literally tapped the right one, you chaos creature 😭🔥";
    }
    const maxDist = BALLOON_COUNT - 1;
    const ratio = distance / maxDist;
    if (ratio > 0.66) {
        return "Ice cold 🧊 you’re so far from it, unlike us.";
    } else if (ratio > 0.4) {
        return "A little cold ❄️ but you’re kinda walking in the right direction, the way we did slowly.";
    } else if (ratio > 0.2) {
        return "Warmmm 🥵 you’re getting closer baby, just like we got closer without even realising.";
    } else if (ratio > 0.1) {
        return "Hot hot hot 🔥 you’re very close now, like one more overthinking session and you’d be on it.";
    } else {
        return "You’re basically on top of it now 😳💗 just a few taps away, like my self-control around you.";
    }
}

// ------------------------------
// GAME: BALLOONS
// ------------------------------
function setupGame() {
    if (!el.balloonContainer) return;

    el.balloonContainer.innerHTML = "";
    if (el.gameMessage) el.gameMessage.classList.add("hidden");
    if (el.dragInstructions) el.dragInstructions.classList.add("hidden");
    if (el.dragArea) el.dragArea.classList.add("hidden");

    poppedCount = 0;
    updateProgress();

    winningIndexGlobal = Math.floor(Math.random() * BALLOON_COUNT);
    let lucky = Math.floor(Math.random() * BALLOON_COUNT);
    if (lucky === winningIndexGlobal) {
        lucky = (lucky + 1) % BALLOON_COUNT;
    }
    luckyIndexGlobal = lucky;

    for (let i = 0; i < BALLOON_COUNT; i++) {
        const balloon = document.createElement("button");
        balloon.className =
            "balloon-btn text-white rounded-full w-16 h-20 md:w-20 md:h-24 flex flex-col items-center justify-center text-2xl shadow-lg transition-transform transform hover:scale-110";
        const emojiSpan = document.createElement("span");
        emojiSpan.textContent = "🎈";
        const hintSpan = document.createElement("span");
        hintSpan.className = "text-[10px] mt-1 opacity-80";
        hintSpan.textContent = "";

        balloon.appendChild(emojiSpan);
        balloon.appendChild(hintSpan);

        const color = balloonColors[Math.floor(Math.random() * balloonColors.length)];
        balloon.style.backgroundColor = color;

        if (i === luckyIndexGlobal) {
            balloon.setAttribute("data-lucky", "1");
            hintSpan.textContent = "maybe me 👀";
        }

        balloon.addEventListener("click", function () {
            const isWinning = (i === winningIndexGlobal);
            const isLucky = (i === luckyIndexGlobal && !isWinning);
            popBalloon(balloon, i, isWinning, isLucky);
        });

        el.balloonContainer.appendChild(balloon);
    }

    completedSteps.game = false;
    updateLoveMeter();
}

function playPopSound() {
    if (!el.popSound || isMasterMuted) return;
    try {
        el.popSound.volume = BG_TARGET_VOLUME;
        el.popSound.currentTime = 0;
        el.popSound.play().catch(function () { });
    } catch (e) { }
}

function popBalloon(balloon, index, isWinning, isLucky) {
    if (balloon.getAttribute("data-popped") === "1") return;
    balloon.setAttribute("data-popped", "1");

    playPopSound();
    spawnHeartsAt(balloon);

    if (!isWinning) {
        vibrate(15);
        spawnMiniConfettiAt(balloon);
    }

    if (isLucky && el.gameMessage) {
        el.gameMessage.textContent = "That one was lucky 💘 Just like me finding you.";
        el.gameMessage.classList.remove("hidden");
    }

    balloon.style.transition = "transform 0.2s ease, opacity 0.2s ease";
    balloon.style.transform = "scale(1.2)";

    setTimeout(function () {
        balloon.style.opacity = "0";
        balloon.style.transform = "scale(0.4)";
        setTimeout(function () {
            balloon.remove();
            poppedCount++;
            updateProgress();

            const distance = Math.abs(index - winningIndexGlobal);

            if (isWinning) {
                vibrate([30, 50, 30]);
                handleWinningBalloon();
            } else {
                handleWrongClick(distance);
            }
        }, 120);
    }, 40);
}

function handleWrongClick(distance) {
    if (!el.gameMessage) return;
    const base = wrongClickMessages[Math.floor(Math.random() * wrongClickMessages.length)];
    const hint = getHintForDistance(distance);
    el.gameMessage.textContent = base + " " + hint;
    el.gameMessage.classList.remove("hidden");
    el.gameMessage.classList.add("shake");
    setTimeout(function () {
        el.gameMessage.classList.remove("shake");
    }, 300);
}

function handleWinningBalloon() {
    if (!el.gameMessage || !el.dragInstructions || !el.dragArea) return;

    el.gameMessage.textContent = "You found my heart, baby 💘 Now drag it into the circle!";
    el.gameMessage.classList.remove("hidden");
    el.dragInstructions.classList.remove("hidden");
    el.dragArea.classList.remove("hidden");

    enableHeartDrag();

    if (el.dramaticAudio && !isMasterMuted) {
        try {
            el.dramaticAudio.currentTime = 0;
            el.dramaticAudio.play().catch(function () { });
        } catch (e) { }
    }
}

// ------------------------------
// DRAG HEART (pointer-based)
// ------------------------------
function enableHeartDrag() {
    if (!el.heartDraggable || !el.heartDropzone) return;
    if (heartDragInitialized) return;
    heartDragInitialized = true;

    const heart = el.heartDraggable;
    const dropzone = el.heartDropzone;

    let dragging = false;
    let activePointerId = null;
    let offsetX = 0;
    let offsetY = 0;
    let heartWidth = 0;
    let heartHeight = 0;

    heart.style.touchAction = "none";

    function onPointerDown(e) {
        if (e.button !== undefined && e.button !== 0) return;

        dragging = true;
        activePointerId = (e.pointerId !== undefined) ? e.pointerId : null;
        heart.classList.add("dragging");

        const rect = heart.getBoundingClientRect();
        heartWidth = rect.width;
        heartHeight = rect.height;

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        heart.style.position = "fixed";
        heart.style.left = rect.left + "px";
        heart.style.top = rect.top + "px";

        if (heart.setPointerCapture && activePointerId !== null) {
            heart.setPointerCapture(activePointerId);
        }

        e.preventDefault();
    }

    function onPointerMove(e) {
        if (!dragging) return;
        if (activePointerId !== null && e.pointerId !== activePointerId) return;

        e.preventDefault();

        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;

        const maxX = window.innerWidth - heartWidth;
        const maxY = window.innerHeight - heartHeight;
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > maxX) x = maxX;
        if (y > maxY) y = maxY;

        const dropRect = dropzone.getBoundingClientRect();
        const dropCX = dropRect.left + dropRect.width / 2;
        const dropCY = dropRect.top + dropRect.height / 2;

        const heartCX = x + heartWidth / 2;
        const heartCY = y + heartHeight / 2;

        const dx = dropCX - heartCX;
        const dy = dropCY - heartCY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const magnetRadius = 140;
        if (dist < magnetRadius) {
            const strength = (magnetRadius - dist) / magnetRadius * 0.4;
            x += dx * strength;
            y += dy * strength;
        }

        heart.style.left = x + "px";
        heart.style.top = y + "px";
    }

    function onPointerUp(e) {
        if (!dragging) return;
        if (activePointerId !== null && e.pointerId !== activePointerId) return;

        dragging = false;
        heart.classList.remove("dragging");

        if (heart.releasePointerCapture && activePointerId !== null) {
            try {
                heart.releasePointerCapture(activePointerId);
            } catch (err) { }
        }
        activePointerId = null;

        const heartRect = heart.getBoundingClientRect();
        const dropRect = dropzone.getBoundingClientRect();

        const overlap = !(
            heartRect.right < dropRect.left ||
            heartRect.left > dropRect.right ||
            heartRect.bottom < dropRect.top ||
            heartRect.top > dropRect.bottom
        );

        if (overlap) {
            handleSuccessfulDrop();
        }

        e.preventDefault();
    }

    heart.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);
}

function handleSuccessfulDrop() {
    el.heartDraggable.style.position = "static";
    el.heartDraggable.style.left = "";
    el.heartDraggable.style.top = "";
    el.dragArea.classList.add("hidden");
    el.dragInstructions.classList.add("hidden");

    if (el.gameMessage) {
        el.gameMessage.textContent = "You handled my heart perfectly, sweetheart 💝";
    }
    startConfetti();
    completedSteps.game = true;
    updateLoveMeter();
    showProgressToast("Level 1 unlocked: you found my heart 🎈");

    heartDragInitialized = false;

    setTimeout(function () {
        showSection("letter");
        startTypewriter();
    }, 1800);
}

// ------------------------------
// TYPEWRITER
// ------------------------------
function startTypewriter() {
    if (el.typewriter) {
        el.typewriter.innerHTML = "";
    }
    typingIndex = 0;
    if (el.typingIndicator) {
        el.typingIndicator.classList.remove("hidden");
    }
    typeNextChar();
}

function typeNextChar() {
    if (typingIndex < messageText.length) {
        const char = messageText.charAt(typingIndex);
        if (el.typewriter) {
            el.typewriter.innerHTML += char;
        }
        typingIndex++;
        setTimeout(typeNextChar, 40);
    } else {
        if (el.typingIndicator) {
            el.typingIndicator.classList.add("hidden");
        }
        completedSteps.letter = true;
        updateLoveMeter();
        showProgressToast("Level 2 unlocked: you survived my dramatic letter 💌");
    }
}

// ------------------------------
// SECTION FLOW + NAV + CURRENT LABEL
// ------------------------------
function showSection(name) {
    const sections = {
        game: el.gameSection,
        letter: el.messageSection,
        photos: el.photoSection,
        playlist: el.playlistSection,
        final: el.finalSection
    };
    for (var key in sections) {
        const sec = sections[key];
        if (!sec) continue;
        sec.classList.add("hidden");
        sec.classList.remove("section-visible");
    }
    const target = sections[name] || el.gameSection;
    if (target) {
        target.classList.remove("hidden");
        requestAnimationFrame(function () {
            target.classList.add("section-visible");
        });
    }
    setActiveNav(name);
    updateCurrentSectionLabel(name);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function setActiveNav(name) {
    if (!el.navPills) return;
    el.navPills.forEach(function (pill) {
        const sec = pill.getAttribute("data-section");
        if (sec === name) pill.classList.add("nav-active");
        else pill.classList.remove("nav-active");
    });
}

function setupSectionNav() {
    if (!el.navPills) return;
    el.navPills.forEach(function (pill) {
        pill.addEventListener("click", function () {
            if (!hasUnlockedNav) return;
            const sec = pill.getAttribute("data-section");
            if (!sec) return;
            showSection(sec);
        });
    });
}

function unlockNav() {
    hasUnlockedNav = true;
    if (el.sectionNav) {
        el.sectionNav.classList.remove("hidden");
        el.sectionNav.classList.add("nav-visible");
    }
}

// new: update the "You’re currently in: ___" label
function updateCurrentSectionLabel(sectionName) {
    if (!el.currentSectionName) return;

    let label = "Game";
    if (sectionName === "letter") label = "Letter";
    else if (sectionName === "photos") label = "Memories";
    else if (sectionName === "playlist") label = "Playlist";
    else if (sectionName === "final") label = "Final page";

    el.currentSectionName.textContent = label;
}

// LETTER → PHOTOS
function setupLetterButton() {
    if (!el.surpriseBtn) return;
    el.surpriseBtn.addEventListener("click", function () {
        showSection("photos");
        completedSteps.photos = true;
        updateLoveMeter();
        showProgressToast("Level 3 unlocked: you opened our memories 📸");
    });
}

// PHOTOS → PLAYLIST
function setupPhotosNextButton() {
    if (!el.photosNextBtn) return;
    el.photosNextBtn.addEventListener("click", function () {
        showSection("playlist");
        renderPlaylist();
        completedSteps.playlist = true;
        updateLoveMeter();
        showProgressToast("Level 4 unlocked: our tiny playlist is yours 🎧");
    });
}

// ------------------------------
// PHOTO SLIDER
// ------------------------------
function initPhotoSlider() {
    if (!el.photoSlider) return;
    photoSlides = Array.from(el.photoSlider.querySelectorAll(".photo-slide"));
    if (!photoSlides.length) return;

    currentPhotoIndex = 0;
    photoSlides[0].classList.add("active");
    createPhotoDots();
    updatePhotoDots();

    if (el.photoPrev) {
        el.photoPrev.addEventListener("click", function () {
            showPhotoSlide(currentPhotoIndex - 1);
        });
    }
    if (el.photoNext) {
        el.photoNext.addEventListener("click", function () {
            showPhotoSlide(currentPhotoIndex + 1);
        });
    }

    let startX = null;
    el.photoSlider.addEventListener("touchstart", function (e) {
        const t = e.touches[0];
        if (!t) return;
        startX = t.clientX;
    }, { passive: true });

    el.photoSlider.addEventListener("touchend", function (e) {
        if (startX == null) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - startX;
        if (Math.abs(dx) > 40) {
            if (dx < 0) showPhotoSlide(currentPhotoIndex + 1);
            else showPhotoSlide(currentPhotoIndex - 1);
        }
        startX = null;
    });
}

function createPhotoDots() {
    if (!el.photoDots) return;
    el.photoDots.innerHTML = "";
    photoSlides.forEach(function (_, idx) {
        const dot = document.createElement("button");
        dot.className = "w-2.5 h-2.5 rounded-full bg-pink-200";
        dot.addEventListener("click", function () {
            showPhotoSlide(idx);
        });
        el.photoDots.appendChild(dot);
    });
}

function updatePhotoDots() {
    if (!el.photoDots) return;
    const dots = Array.from(el.photoDots.children);
    dots.forEach(function (dot, idx) {
        if (idx === currentPhotoIndex) {
            dot.classList.add("bg-pink-500");
            dot.classList.remove("bg-pink-200");
        } else {
            dot.classList.add("bg-pink-200");
            dot.classList.remove("bg-pink-500");
        }
    });
}

function showPhotoSlide(index) {
    if (!photoSlides.length) return;
    if (index < 0) index = photoSlides.length - 1;
    if (index >= photoSlides.length) index = 0;
    photoSlides.forEach(function (slide) {
        slide.classList.remove("active");
    });
    currentPhotoIndex = index;
    photoSlides[currentPhotoIndex].classList.add("active");
    updatePhotoDots();
}

// ------------------------------
// PLAYLIST
// ------------------------------
function renderPlaylist() {
    if (!el.playlistContainer) return;
    el.playlistContainer.innerHTML = "";

    playlist.forEach(function (track, index) {
        const card = document.createElement("div");
        card.className = "song-card";

        const left = document.createElement("div");
        left.className = "flex items-start gap-2 flex-1";

        const indexDot = document.createElement("div");
        indexDot.className = "track-index";
        indexDot.textContent = (index + 1).toString();

        const textWrap = document.createElement("div");
        const titleEl = document.createElement("div");
        titleEl.className = "song-title";
        titleEl.textContent = track.title;

        const artistEl = document.createElement("div");
        artistEl.className = "song-artist";
        artistEl.textContent = track.artist;

        const reasonEl = document.createElement("div");
        reasonEl.className = "song-reason";
        reasonEl.textContent = track.reason;

        textWrap.appendChild(titleEl);
        textWrap.appendChild(artistEl);
        textWrap.appendChild(reasonEl);

        left.appendChild(indexDot);
        left.appendChild(textWrap);

        const right = document.createElement("div");
        right.className = "flex flex-col items-end gap-1";

        const playBtn = document.createElement("button");
        playBtn.className = "play-btn bg-pink-500 text-white rounded-full";
        playBtn.textContent = "Play";

        const audio = document.createElement("audio");
        audio.className = "song-audio";
        audio.src = track.audioUrl;
        audio.preload = "metadata";

        right.appendChild(playBtn);
        card.appendChild(left);
        card.appendChild(right);
        el.playlistContainer.appendChild(card);

        let revealed = false;
        function revealCard() {
            if (!revealed) {
                card.classList.add("song-revealed");
                revealed = true;
            }
        }

        playBtn.addEventListener("click", function () {
            if (currentAudio === audio && !audio.paused) {
                audio.pause();
                playBtn.textContent = "Play";
                stopNowPlaying();

                if (bgWasPlayingBeforeTrack && el.bgMusic && !isMasterMuted) {
                    el.bgMusic.play().catch(function () { });
                    if (el.bgMusicBtn) el.bgMusicBtn.classList.add("bg-music-on");
                }
                bgWasPlayingBeforeTrack = false;
            } else {
                playSong(audio, track, card, playBtn);
                revealCard();
            }
        });
    });
}

function playSong(audio, track, card, playBtn) {
    stopCurrentSong();

    if (el.bgMusic && !el.bgMusic.paused) {
        el.bgMusic.pause();
        bgWasPlayingBeforeTrack = true;
        if (el.bgMusicBtn) el.bgMusicBtn.classList.remove("bg-music-on");
    }

    currentAudio = audio;
    audio.muted = isMasterMuted;
    audio.currentTime = track.highlightStart || 0;
    audio.play().catch(function () { });

    document.querySelectorAll(".song-card").forEach(function (c) {
        c.classList.remove("song-playing");
    });
    card.classList.add("song-playing");
    playBtn.textContent = "Pause";

    if (el.nowPlayingBar && el.nowPlayingText) {
        el.nowPlayingBar.classList.remove("hidden");
        el.nowPlayingText.textContent = "Now playing: " + track.title + " — " + track.artist;
    }
    if (el.soundwave) {
        el.soundwave.classList.remove("hidden");
    }

    audio.onended = function () {
        playBtn.textContent = "Play";
        stopNowPlaying();
        if (bgWasPlayingBeforeTrack && el.bgMusic && !isMasterMuted) {
            el.bgMusic.play().catch(function () { });
            if (el.bgMusicBtn) el.bgMusicBtn.classList.add("bg-music-on");
        }
        bgWasPlayingBeforeTrack = false;
    };
}

function stopCurrentSong() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    document.querySelectorAll(".song-card").forEach(function (c) {
        c.classList.remove("song-playing");
    });
    stopNowPlaying();
}

function stopNowPlaying() {
    if (el.nowPlayingBar) el.nowPlayingBar.classList.add("hidden");
    if (el.soundwave) el.soundwave.classList.add("hidden");
}

// ------------------------------
// CONFETTI
// ------------------------------
function startConfetti() {
    if (!el.confettiCanvas || !confettiCtx) return;

    el.confettiCanvas.width = window.innerWidth;
    el.confettiCanvas.height = window.innerHeight;
    el.confettiCanvas.classList.remove("hidden");

    confettiPieces = [];
    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * el.confettiCanvas.width,
            y: Math.random() * el.confettiCanvas.height - el.confettiCanvas.height,
            w: 6 + Math.random() * 4,
            h: 8 + Math.random() * 6,
            speed: 2 + Math.random() * 3,
            color: ["#ec4899", "#fb7185", "#f97316", "#22c55e", "#3b82f6"][Math.floor(Math.random() * 5)],
            tilt: Math.random() * 10,
            tiltSpeed: 0.05 + Math.random() * 0.12
        });
    }

    if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
    confettiLoop();

    setTimeout(function () {
        el.confettiCanvas.classList.add("hidden");
        if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
    }, 2600);
}

function confettiLoop() {
    if (!confettiCtx || !el.confettiCanvas) return;
    confettiAnimationId = requestAnimationFrame(confettiLoop);
    confettiCtx.clearRect(0, 0, el.confettiCanvas.width, el.confettiCanvas.height);

    confettiPieces.forEach(function (p) {
        p.y += p.speed;
        p.tilt += p.tiltSpeed;

        if (p.y > el.confettiCanvas.height) {
            p.y = -10;
            p.x = Math.random() * el.confettiCanvas.width;
        }

        confettiCtx.save();
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate(p.tilt);
        confettiCtx.fillStyle = p.color;
        confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        confettiCtx.restore();
    });
}

// ------------------------------
// RELATIONSHIP COUNTER + COMPLIMENTS
// ------------------------------
function updateRelationshipCounter() {
    const now = new Date();
    const days = daysBetween(relationshipStartDate, now);

    if (el.relationshipCounter) {
        el.relationshipCounter.textContent =
            "We’ve been in each other’s lives for about " + days +
            " days now. That’s a lot of overthinking, chaos and soft moments. 🫶";
    }
    if (el.relationshipCounterHero) {
        el.relationshipCounterHero.textContent =
            "Day " + days + " of loving you (and still not enough). 💗";
    }
}

function rotateCompliments() {
    if (!el.complimentText) return;
    complimentIndex = (complimentIndex + 1) % compliments.length;
    el.complimentText.textContent = compliments[complimentIndex];
}

// ------------------------------
// LOVE METER
// ------------------------------
function updateLoveMeter() {
    if (!el.loveMeterFill || !el.loveMeterLabel) return;

    let level = 0;
    if (completedSteps.game) level++;
    if (completedSteps.letter) level++;
    if (completedSteps.photos) level++;
    if (completedSteps.playlist) level++;
    if (completedSteps.final) level++;

    const pct = (level / 5) * 100;
    el.loveMeterFill.style.width = pct + "%";
    el.loveMeterLabel.textContent = "Love level: " + level + " / 5";
}

// ------------------------------
// SOUND + BG MUSIC
// ------------------------------
function setupSoundToggle() {
    if (!el.soundToggleBtn || !el.soundToggleLabel) return;
    el.soundToggleBtn.addEventListener("click", function () {
        isMasterMuted = !isMasterMuted;
        if (isMasterMuted) {
            el.soundToggleLabel.textContent = "Sound off";
            el.soundToggleBtn.classList.add("sound-off");
            if (el.bgMusic) el.bgMusic.muted = true;
            if (currentAudio) currentAudio.muted = true;
        } else {
            el.soundToggleLabel.textContent = "Sound on";
            el.soundToggleBtn.classList.remove("sound-off");
            if (el.bgMusic) el.bgMusic.muted = false;
            if (currentAudio) currentAudio.muted = false;
        }
    });
}

function setupBgMusic() {
    if (!el.bgMusic || !el.bgMusicBtn) return;
    el.bgMusic.volume = BG_TARGET_VOLUME;

    el.bgMusicBtn.addEventListener("click", function () {
        if (el.bgMusic.paused) {
            if (!isMasterMuted) {
                el.bgMusic.play().catch(function () { });
            }
            el.bgMusicBtn.classList.add("bg-music-on");
        } else {
            el.bgMusic.pause();
            el.bgMusicBtn.classList.remove("bg-music-on");
        }
    });
}

// ------------------------------
// FINAL SECTION BUTTONS
// ------------------------------
function setupFinalButtons() {
    if (el.finalBtn) {
        let holdTimeout = null;

        function startHold() {
            el.finalBtn.classList.add("holding");
            holdTimeout = setTimeout(function () {
                completedSteps.final = true;
                updateLoveMeter();
                showSection("final");
                unlockNav();
                showProgressToast("Level 5 unlocked: you finished everything, my overachiever 💗");
            }, 1200);
        }

        function endHold() {
            el.finalBtn.classList.remove("holding");
            if (holdTimeout) clearTimeout(holdTimeout);
        }

        el.finalBtn.addEventListener("mousedown", startHold);
        el.finalBtn.addEventListener("mouseup", endHold);
        el.finalBtn.addEventListener("mouseleave", endHold);
        el.finalBtn.addEventListener("touchstart", startHold, { passive: true });
        el.finalBtn.addEventListener("touchend", endHold);
    }

    if (el.replayBtn) {
        el.replayBtn.addEventListener("click", function () {
            completedSteps = {
                game: false,
                letter: false,
                photos: false,
                playlist: false,
                final: false
            };
            updateLoveMeter();
            setupGame();
            showSection("game");
            startIntroCountdown();
        });
    }

    if (el.backToTopBtn) {
        el.backToTopBtn.addEventListener("click", function () {
            showSection("game");
        });
    }
}

// ------------------------------
// INIT
// ------------------------------
document.addEventListener("DOMContentLoaded", function () {
    createFloatingHearts();
    createParallaxHearts();
    startIntroCountdown();

    setupGame();
    initPhotoSlider();
    renderPlaylist();
    setupSectionNav();
    setupLetterButton();
    setupPhotosNextButton();
    setupSoundToggle();
    setupBgMusic();
    setupFinalButtons();
    updateRelationshipCounter();
    updateLoveMeter();
    updateCurrentSectionLabel("game");
    showSection("game");

    setInterval(rotateCompliments, 8000);

    window.addEventListener("scroll", function () {
        updateParallaxHearts();
        updateScrollGradient();
    });
});
