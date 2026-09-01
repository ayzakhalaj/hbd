// ======================================================
// 🎂 BIRTHDAY WEBSITE - ENG.JS
// ======================================================

// ======================================================
// 🎉 INITIAL CONFETTI
// ======================================================

if (typeof confetti === "function") {
  confetti({
    particleCount: 2000,
    spread: 180,
    origin: { y: 0.8 },
  });
}

// ======================================================
// 🎵 BACKGROUND MUSIC
// ======================================================

document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bgMusic");

  if (!audio) return;

  audio.play().catch(function () {
    const startMusic = function () {
      audio.play().catch(function () {});

      document.removeEventListener("pointerdown", startMusic);
      document.removeEventListener("click", startMusic);
      document.removeEventListener("touchstart", startMusic);
    };

    document.addEventListener("pointerdown", startMusic, {
      once: true,
    });

    document.addEventListener("click", startMusic, {
      once: true,
    });

    document.addEventListener("touchstart", startMusic, {
      once: true,
    });
  });
});

// ======================================================
// 🎂 SCREEN 1 → SCREEN 2
// ======================================================

function showFeedback() {
  const birthdayScreen = document.getElementById("screen-birthday");

  const feedbackScreen = document.getElementById("screen-feedback");

  if (!birthdayScreen || !feedbackScreen) return;

  birthdayScreen.classList.add("hidden");

  feedbackScreen.classList.remove("hidden");

  if (typeof confetti === "function") {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.5 },
    });
  }
}

// ======================================================
// 🎥 SCREEN 2 → SCREEN 3
// ======================================================

function goToVideo() {
  const feedbackScreen = document.getElementById("screen-feedback");

  const videoScreen = document.getElementById("screen-video");

  const video = document.getElementById("birthdayVideo");

  if (feedbackScreen) {
    feedbackScreen.classList.add("hidden");
  }

  if (videoScreen) {
    videoScreen.classList.remove("hidden");
  }

  if (video) {
    video.currentTime = 0;

    video.play().catch(function () {
      const playVideo = function () {
        video.play().catch(function () {});

        video.removeEventListener("pointerdown", playVideo);
      };

      video.addEventListener("pointerdown", playVideo);
    });
  }

  if (typeof confetti === "function") {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.5 },
    });
  }
}

// ======================================================
// 🎬 SCREEN 3 → SCREEN 4
// ======================================================

function goToGoodbye() {
  const videoScreen = document.getElementById("screen-video");

  const goodbyeScreen = document.getElementById("screen4");

  if (!videoScreen || !goodbyeScreen) return;

  videoScreen.classList.add("hidden");

  goodbyeScreen.classList.remove("hidden");

  if (typeof confetti === "function") {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
  }
}

// ======================================================
// 👋 SCREEN 4 → SCREEN 5
// ======================================================

function bye() {
  const goodbyeScreen = document.getElementById("screen4");

  const outScreen = document.getElementById("screen-out");

  if (!goodbyeScreen || !outScreen) return;

  goodbyeScreen.classList.add("hidden");

  outScreen.classList.remove("hidden");

  if (typeof confetti === "function") {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
  }
}

// ======================================================
// 😈 RUNAWAY NO BUTTON
// ======================================================

let noAttempts = 0;

// ======================================================
// MOVE NO BUTTON
// ======================================================

function moveNo(event) {
  const noBtn = document.getElementById("noBtn");

  if (!noBtn) return;

  // Prevent normal click/touch
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  noAttempts++;

  // ----------------------------------------------------
  // Get actual button dimensions
  // ----------------------------------------------------

  const buttonWidth = noBtn.offsetWidth;

  const buttonHeight = noBtn.offsetHeight;

  // ----------------------------------------------------
  // Keep button inside screen
  // ----------------------------------------------------

  const padding = 20;

  const maxX = window.innerWidth - buttonWidth - padding;

  const maxY = window.innerHeight - buttonHeight - padding;

  // ----------------------------------------------------
  // Random position
  // ----------------------------------------------------

  const x = padding + Math.random() * Math.max(0, maxX - padding);

  const y = padding + Math.random() * Math.max(0, maxY - padding);

  // ----------------------------------------------------
  // Move button
  // ----------------------------------------------------

  noBtn.style.position = "fixed";

  noBtn.style.left = `${x}px`;

  noBtn.style.top = `${y}px`;

  noBtn.style.zIndex = "99999";

  noBtn.style.touchAction = "none";

  // Remove transform if your CSS has one
  noBtn.style.transform = "none";

  // ----------------------------------------------------
  // Change text
  // ----------------------------------------------------

  const texts = [
    "NOPE 😅",

    "Are you sure? 🤨",

    "Really? 🥺",

    "Come on... 😭",

    "Nice try 😂",

    "You can't catch me 😈",

    "STOP TRYING 😂",

    "HAHA NOPE 💀",

    "Still no 😭",

    "Give up already? 😭",
  ];

  // Keep cycling through messages forever
  const textIndex = (noAttempts - 1) % texts.length;

  noBtn.innerText = texts[textIndex];
}

// ======================================================
// 🖱️ DESKTOP
// ======================================================

function handleMouseEnter(event) {
  if (event.pointerType !== "mouse") {
    return;
  }

  moveNo(event);
}

// ======================================================
// 📱 MOBILE / TABLET
// ======================================================

function handleTouch(event) {
  if (event.pointerType === "touch" || event.pointerType === "pen") {
    moveNo(event);
  }
}

// ======================================================
// 🔧 INITIALIZE NO BUTTON
// ======================================================

document.addEventListener("DOMContentLoaded", function () {
  const noBtn = document.getElementById("noBtn");

  if (!noBtn) {
    return;
  }

  // --------------------------------------------------
  // Desktop
  // --------------------------------------------------

  noBtn.addEventListener("pointerenter", handleMouseEnter);

  // --------------------------------------------------
  // Mobile
  // --------------------------------------------------

  noBtn.addEventListener("pointerdown", handleTouch);

  // --------------------------------------------------
  // Extra fallback for mobile browsers
  // --------------------------------------------------

  noBtn.addEventListener(
    "touchstart",
    function (event) {
      moveNo(event);
    },
    {
      passive: false,
    },
  );

  // --------------------------------------------------
  // Prevent normal click
  // --------------------------------------------------

  noBtn.addEventListener("click", function (event) {
    event.preventDefault();

    event.stopPropagation();

    moveNo(event);
  });

  // --------------------------------------------------
  // Mobile browser settings
  // --------------------------------------------------

  noBtn.style.touchAction = "none";
});

// ======================================================
// 📱 HANDLE SCREEN ROTATION
// ======================================================

window.addEventListener("resize", function () {
  const noBtn = document.getElementById("noBtn");

  if (!noBtn) {
    return;
  }

  if (noBtn.style.position !== "fixed") {
    return;
  }

  const buttonWidth = noBtn.offsetWidth;

  const buttonHeight = noBtn.offsetHeight;

  const padding = 15;

  let x = parseFloat(noBtn.style.left);

  let y = parseFloat(noBtn.style.top);

  if (Number.isNaN(x)) {
    x = padding;
  }

  if (Number.isNaN(y)) {
    y = padding;
  }

  const maxX = Math.max(padding, window.innerWidth - buttonWidth - padding);

  const maxY = Math.max(padding, window.innerHeight - buttonHeight - padding);

  x = Math.min(Math.max(x, padding), maxX);

  y = Math.min(Math.max(y, padding), maxY);

  noBtn.style.left = `${x}px`;

  noBtn.style.top = `${y}px`;
});
