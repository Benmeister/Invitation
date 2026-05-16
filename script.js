function openInvitation() { 
  // 1. Reveal your full-screen invitation overlay window
  var overlay = document.getElementById("invitationOverlay"); 
  overlay.classList.add("active"); 
  
  // 2. Fire the heart confetti sequence burst
  startHeartConfetti();

  // 3. Target the HTML element player natively
  var music = document.getElementById("jazzMusic");
  
  if (music) {
    music.volume = 0.6; // Sets a pleasant background audio balance
    
    // Force browser activation
    music.play().then(() => {
      console.log("Jazz music stream initialized successfully on GitHub!");
    }).catch(function(error) {
      console.log("Autoplay context state block defense active:", error);
    });
  }
} 

function startHeartConfetti() {
  const container = document.getElementById("heartsContainer");
  container.innerHTML = ""; 
  
  const heartTypes = ['❤️', '💖', '💝', '💕'];
  const totalHearts = 40; 
  
  for (let i = 0; i < totalHearts; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-particle";
    
    heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (Math.random() * 1.7 + 0.8) + "rem";
    heart.style.animationDuration = (Math.random() * 4 + 3) + "s";
    heart.style.animationDelay = (Math.random() * 2) + "s";
    
    const swayValue = (Math.random() * 150 - 75) + "px"; 
    const spinValue = (Math.random() * 360 - 180) + "deg"; 
    heart.style.setProperty('--sway-distance', swayValue);
    heart.style.setProperty('--spin-speed', spinValue);
    
    container.appendChild(heart);
  }
}

function closeInvitation() { 
  var overlay = document.getElementById("invitationOverlay"); 
  overlay.classList.remove("active"); 
  
  document.getElementById("heartsContainer").innerHTML = "";

  // Pause the music track if they exit the invitation view
  var music = document.getElementById("jazzMusic");
  if (music) {
    music.pause();
  }
}
