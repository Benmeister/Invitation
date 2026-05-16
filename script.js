let heartInterval; // Store our generation tracking loop

function openInvitation() { 
  // 1. Open the full-screen invitation container
  var overlay = document.getElementById("invitationOverlay"); 
  overlay.classList.add("active"); 
  
  // 2. Fire the heart confetti sequence burst
  startHeartConfetti();
} 

function startHeartConfetti() {
  const container = document.getElementById("heartsContainer");
  container.innerHTML = ""; // Empty out old elements if they exist
  
  const heartTypes = ['❤️', '💖', '💝', '💕'];
  const totalHearts = 40; // Total count of active flying particles
  
  for (let i = 0; i < totalHearts; i++) {
    // Build a unique text block particle
    const heart = document.createElement("div");
    heart.className = "heart-particle";
    
    // Choose a random heart character design 
    heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];
    
    // Randomize initial placement across the width axis (0% to 100%)
    heart.style.left = Math.random() * 100 + "%";
    
    // Randomize sizing parameters scales (From small 0.8rem up to large 2.5rem)
    heart.style.fontSize = (Math.random() * 1.7 + 0.8) + "rem";
    
    // Randomize travel durations (Varying speeds from 3 seconds up to 7 seconds)
    heart.style.animationDuration = (Math.random() * 4 + 3) + "s";
    
    // Add randomized time delay padding so they fall staggered, not all at once
    heart.style.animationDelay = (Math.random() * 2) + "s";
    
    // Generate specialized custom CSS variable offsets for the keyframe loops
    const swayValue = (Math.random() * 150 - 75) + "px"; // Sways left/right by up to 75px
    const spinValue = (Math.random() * 360 - 180) + "deg"; // Random spinning twists
    heart.style.setProperty('--sway-distance', swayValue);
    heart.style.setProperty('--spin-speed', spinValue);
    
    // Inject the fully built element right onto the viewport backdrop layer
    container.appendChild(heart);
  }
}

function closeInvitation() { 
  var overlay = document.getElementById("invitationOverlay"); 
  overlay.classList.remove("active"); 
  
  // Wipe out the falling elements to conserve browser processor memory
  document.getElementById("heartsContainer").innerHTML = "";
}

