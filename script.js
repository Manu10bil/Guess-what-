const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// Array of random messages for the No button
const noMessages = [
  "bitti bleibiiiii",
  "Du willst mich dochhhhh",
  "plessssss",
  "DU SCHAFFST DAS DRUECK YESSSSS",
  "verdrueckt?",
  "YOU GO GIRLLLLL"
];

// NO button click behavior
noBtn.addEventListener("click", () => {
  // Change text randomly
  const randomIndex = Math.floor(Math.random() * noMessages.length);
  noBtn.textContent = noMessages[randomIndex];

  // Make YES button grow a little
  let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize + 3) + "px";

  // Optional: show final message if Yes gets big enough
  if (currentSize >= 50) {
    document.body.innerHTML = `
      <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background:#ff9a9e;">
        <h1 style="color:white;font-size:3rem;">YAY 💖 I love you!</h1>
        <p style="color:white;font-size:1.5rem;">So happy you said YES!</p>
      </div>
    `;
  }
});

// YES button click behavior (grows too)
yesBtn.addEventListener("click", () => {
  let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize + 5) + "px";

  if (currentSize >= 50) {
    document.body.innerHTML = `
      <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background:#ff9a9e;">
        <h1 style="color:white;font-size:3rem;">YAY 💖 I love you!</h1>
        <p style="color:white;font-size:1.5rem;">So happy you said YES!</p>
      </div>
    `;
  }
});
