const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// Array of random messages for the No button
const noMessages = [
  "Lieber nd",
  "Bitti bleibiiii",
  "plessssssss",
  "du gemeiniiiiii",
  "verdrueckt?",
  "ICH GLAUBE AN DICH, ANDERER BUTTON"
];

// NO button click behavior
noBtn.addEventListener("click", () => {
  // Pick a random message
  const randomIndex = Math.floor(Math.random() * noMessages.length);
  noBtn.textContent = noMessages[randomIndex];

  // Move the button to a random position
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
});

// YES button click behavior (grows)
yesBtn.addEventListener("click", () => {
  // Increase size
  let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize + 5) + "px";

  // Show final message after it grows big
  if (currentSize >= 40) {
    document.body.innerHTML = `
      <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background:#ff9a9e;">
        <h1 style="color:white;font-size:3rem;">YAY 💖 I love you!</h1>
        <p style="color:white;font-size:1.5rem;">So happy you said YES!</p>
      </div>
    `;
  }
});
