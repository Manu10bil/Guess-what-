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
  const randomIndex = Math.floor(Math.random() * noMessages.length);
  noBtn.textContent = noMessages[randomIndex];

  // YES button grows
  let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize + 6) + "px";
});

// YES button behavior – FINAL PAGE
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="final-page" style="
      position: relative;
      width: 100%;
      height: 100vh;
      background: #ff9a9e;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      overflow: hidden;
    ">
      <h1 style="color:white;font-size:3rem;">
        YUHUUUUUU I love you Babyyyyy!
      </h1>

      <p style="color:white;font-size:1.5rem; max-width: 800px;">
        Wirklich danke, dass ich dich habeeee ich bin wirklich so frohhh.
        Du bist das allerbeste was mir je passiert ist 💖
        Ich freue mich schon voll auf den 14. Heheeeeee.
      </p>

      <!-- Corner Images -->
      <img src="images/corner1.png" class="corner top-left">
      <img src="images/corner2.png" class="corner top-right">
      <img src="images/corner3.png" class="corner bottom-left">
      <img src="images/corner4.png" class="corner bottom-right">
    </div>
  `;
});

