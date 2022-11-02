const game = new CrazyGPs ();

const input = document.querySelector('input');
const startBtn = document.querySelector(".playBtn");

startBtn.addEventListener("click", () => {
    if (input.value.length > 0){
        game.play();
        game.showQuestion();
    }
});

input.addEventListener('input', () => {
    game.name = input.value;
});