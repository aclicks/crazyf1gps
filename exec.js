const game = new CrazyGPs ();

const input = document.querySelector('input');
const startBtn = document.querySelector(".playBtn");

startBtn.addEventListener("click", () => {
    game.play();
    game.showQuestion();
});

input.addEventListener('input', () => {
    game.name = input.value;
});