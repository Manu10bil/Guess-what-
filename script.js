const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// Random messages for the No button
const noMessages = [
  "Bittiiiiiii",
  "Du willst es doch auchhhhh",
  "komm schonnnnn",
  "Du gemeiniiiii",
  "Pipifrauuuu",
  "Bitteeeeeee"
];

// NO button behavior
noBtn.addEventListener("click", () => {
  // Change text randomly
  const randomIndex = Math.floor(Math.random() * noMessages.length);
  noBtn.textContent = noMessages[randomIndex];

  // Make YES button grow slightly
  let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize + 6) + "px";
});

// YES button behavior
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background:#ff9a9e;">
      <h1 style="color:white;font-size:3rem;">YAY 💖 I love you!</h1>
      <p style="color:white;font-size:1.5rem;">So happy you said YES!</p>
    </div>
  `;
});
