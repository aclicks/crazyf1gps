const game = new CrazyGPs ();


const startBtn = document.querySelector(".playBtn");
startBtn.addEventListener("click", () => {
    game.play()
});