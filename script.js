const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

// Array of random messages for the No button
const noMessages = [
  "Oops… try again!",
  "Hmm… maybe not 😏",
  "Not yet!",
  "Try clicking YES 💕",
  "Hehe, wrong button!",
  "Almost… click YES!"
];

// NO button click behavior (changes text only)
noBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * noMessages.length);
  noBtn.textContent = noMessages[randomIndex];
  // No movement, stays in place
});

// YES button click behavior (grows)
yesBtn.addEventListener("click", () => {
  let currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize + 5) + "px";

  if (currentSize >= 40) {
    document.body.innerHTML = `
      <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background:#ff9a9e;">
        <h1 style="color:white;font-size:3rem;">YAY 💖 I love you!</h1>
        <p style="color:white;font-size:1.5rem;">So happy you said YES!</p>
      </div>
    `;
  }
});
