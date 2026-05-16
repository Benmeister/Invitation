function openInvitation() { 
  // 1. Reveal your full-screen invitation overlay window
  var overlay = document.getElementById("invitationOverlay"); 
  overlay.classList.add("active"); 
  
  // 2. Fire the heart confetti sequence burst
  startHeartConfetti();

  // 3. Locate and safely trigger the jazz music track
  var music = document.getElementById("jazzMusic");
  
  // Sets volume comfortably at 70% so it doesn't startle your guests
  music.volume = 0.7; 
  
  // Force browser focus to play the track file
  music.play().then(() => {
    console.log("Jazz music stream initialized successfully.");
  }).catch(function(error) {
    console.log("Playback blocked by browser autoplay rules:", error);
  });
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
  
  // Wipe out the falling elements to conserve processor memory
  document.getElementById("heartsContainer").innerHTML = "";

  // Pause the jazz music if they exit the invitation card view
  var music = document.getElementById("jazzMusic");
  music.pause();
}

