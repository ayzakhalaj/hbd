// Initial Confetti Burst
confetti({ particleCount: 2000, spread: 180, origin: { y: 0.8 } });

// Music Autoplay
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bgMusic");
  audio.play().catch(function () {
    function startMusic() {
      audio.play();
      document.removeEventListener("click", startMusic);
      document.removeEventListener("touchstart", startMusic);
    }
    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);
  });
});

// Screen 1 -> Screen 2
function showFeedback() {
  document.getElementById("screen-birthday").classList.add("hidden");
  document.getElementById("screen-feedback").classList.remove("hidden");
  confetti({ particleCount: 150, spread: 70, origin: { y: 0.5 } });
}

// Screen 2 -> Screen 3 (Green Button)
function goToVideo() {
  document.getElementById("screen-feedback").classList.add("hidden");

  const videoScreen = document.getElementById("screen-video");
  videoScreen.classList.remove("hidden");

  const video = document.getElementById("birthdayVideo");
  if (video) {
    video.play().catch(() => {
      // If autoplay is blocked, single tap will start it
      video.addEventListener("click", function playOnce() {
        video.play();
        video.removeEventListener("click", playOnce);
      });
    });
  }
  confetti({ particleCount: 200, spread: 100, origin: { y: 0.5 } });
}
// Screen 3 -> Screen 4
function goToGoodbye() {
  document.getElementById("screen-video").classList.add("hidden");
  document.getElementById("screen4").classList.remove("hidden");
  confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
}
function bye() {
  document.getElementById("screen4").classList.add("hidden");
  document.getElementById("screen-out").classList.remove("hidden");
  confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
}
// Red Button (Runaway)
function moveNo() {
  const noBtn = document.getElementById("noBtn");
  if (!noBtn) return;

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 60);

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  const texts = ["NOPE 😅", "Are you sure?", "Really? 🥺", "Ok, fine 😄"];
  const current = noBtn.innerText;
  const idx = texts.indexOf(current);

  if (idx < texts.length - 1) {
    noBtn.innerText = texts[idx + 1];
  } else {
    // After enough clicks, it gives up and goes to the video
    noBtn.onclick = goToVideo;
    noBtn.innerText = "Yes! 🥳";
    noBtn.className = "yes";
  }
}
