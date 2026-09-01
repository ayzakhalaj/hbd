function goToScreen2() {
  // Hide screen1, show screen2
  document.getElementById("screen1").classList.add("hidden");
  document.getElementById("screen2").classList.remove("hidden");
  // Fire confetti
  confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
  setTimeout(() => {
    confetti({ particleCount: 100, spread: 100, origin: { y: 0.5 } });
  }, 300);
}

function chooseLanguage(lang) {
  if (lang === "fa") {
    window.location.href = "farsi/fa.html";
    // confetti({ particleCount: 200, spread: 80, origin: { y: 0.4 } });
  } else {
    window.location.href = "eng/eng.html";
    confetti({ particleCount: 200, spread: 80, origin: { y: 0.4 } });
  }
}
function moveNo() {
  const noBtn = document.getElementById("noBtn");
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  // Change text playfully
  const texts = ["No 😅", "Are you sure?", "Really? 🥺", "Ok, fine 😄"];
  const current = noBtn.innerText;
  const idx = texts.indexOf(current);
  if (idx < texts.length - 1) noBtn.innerText = texts[idx + 1];
  else {
    // If it's "Ok, fine", make it work like Yes
    noBtn.onclick = goToScreen2;
    noBtn.innerText = "Yes! 🥳";
    noBtn.className = "yes";
  }
}
