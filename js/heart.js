function unlock() {
  const input = document.getElementById("password").value;

  if (input === "pandaLove") {
    document.getElementById("login").style.display = "none";
    document.getElementById("memories").style.display = "block";
    animateHeart();
  } else {
    alert("Wrong secret 😝");
  }
}

function animateHeart() {
  const cells = Array.from(document.querySelectorAll(".cell"));
  const nextBtn = document.getElementById("nextBtn");

  // Sort cells by vertical (top → bottom)
  cells.sort((a, b) => {
    return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
  });

  cells.forEach((cell, index) => {
    cell.style.animationDelay = `${index * 0.12}s`;
  });

  setTimeout(() => {
    nextBtn.style.display = "inline-block";
    nextBtn.onclick = () => {
  document.getElementById("memories").style.display = "none";
  document.getElementById("final").style.display = "flex";
};

  }, cells.length * 120);
}

// Cute NO button escape 😝
const noBtn = document.querySelector(".no");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 60 + "%";
    noBtn.style.top = Math.random() * 60 + "%";
  });
}

// CONFETTI HEARTS ON YES
const yesBtn = document.querySelector(".yes");
const confettiBox = document.querySelector(".confetti-container");

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    for (let i = 0; i < 120; i++) {
      const heart = document.createElement("div");
      heart.className = "confetti-heart";

      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = 2 + Math.random() * 2 + "s";
      heart.style.background =
        Math.random() > 0.5 ? "#ff4d6d" : "#ff8fa3";

      confettiBox.appendChild(heart);

      // cleanup
      setTimeout(() => heart.remove(), 4000);
    }
  });
}

