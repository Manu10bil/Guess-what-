const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
  });
}

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    document.body.innerHTML = `
      <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;background:#ff9a9e;">
        <h1 style="color:white;font-size:3rem;">YAY 💖 I love you!</h1>
        <p style="color:white;font-size:1.5rem;">I’m so happy you said YES!</p>
      </div>
    `;
  });
}
