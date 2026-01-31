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
      <h1 style="color:white;font-size:3rem;">YUHUUUUUU I love you Babyyyyy!</h1>
      <p style="color:white;font-size:1.5rem;">Wirklich danke, dass ich dich habeeee ich bin wirklich so frohhh. Du bist das allerbeste was mir je passiert ist ich freue mich schon voll auf den 14. Heheeeeee.</p>

      <img src="image.jpg" class="corner top-left">
      <img src="image (1).jpg" class="corner top-right">
      <img src="image (2).jpg" class="corner bottom-left">
      <img src="image (3).jpg" class="corner bottom-right">
    </div>
  `;
});
