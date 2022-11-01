class CrazyGPs {
 constructor () {
    this.name = "";
    this.score = 30;
    this.questions = [
        { questionEasy: "Who won the 2008 Singapore GP?",
        answers: ["Felipe Massa", "Lewis Hamilton", "Kimi Räikkönen", "Robert Kubica", "Fernando Alonso"],
        correctAnswer: "Fernando Alonso",},
        { questionEasy: "Who won the 2012 Spain GP?",
        answers: ["Pastor Maldonado", "Lewis Hamilton", "Kimi Räikkönen", "Romain Grosjean", "Fernando Alonso"],
        correctAnswer: "Pastor Maldonado",},
        { questionEasy: "Who won the 2017 Azerbaijan GP?",
        answers: ["Max Verstappen", "Lewis Hamilton", "Lance Stroll", "Daniel Ricciardo", "Esteban Ocon"],
        correctAnswer: "Daniel Ricciardo",},
 ];
    this.result = 0;
    this.round = 0;
    this.page = 0;
    }
    play () {
        let gameBoard = document.querySelector("#gameBoard");
        let introPage = document.querySelector(".introPage");

        introPage.classList.add("hide");

        gameBoard.classList.remove("hide");
    }

    showQuestion () {
        let question = document.querySelector(".question1");
        for(let i = 0; i < 6; i++){
            if (i === 0){
                question.innerText = this.questions[0].questionEasy;
            }
            else{
                const button = document.createElement("button");
                button.className = "answer";
                button.innerText = this.questions[this.page].answers[i-1];
                button.addEventListener("click", e => {this.checkAnswer(button.innerText);});
                question.appendChild(button);
            }
        }
    }

    checkAnswer (textToCheck) {
        if (this.questions[this.page].correctAnswer === textToCheck) {
            
        }
        else {
            
        }
        this.checkStatus()
    }

    checkStatus () {
        if (this.score === 0){

        }
    }

    showTips () {
        //mostrar dicas
    }

    nextQuestion () {
        this.page++;
        let remove = document.querySelector(".question");
        for (let i = 0; i < 5; i++ ){
            remove.removeChild(button);
        }

        let question = document.querySelector(".question1");
        for(let i = 0; i < 6; i++){
            if (i === 0){
                question.innerText = this.questions[0].questionEasy;
            }
            else{
                const button = document.createElement("button");
                button.className = "answer";
                button.innerText = this.questions[this.page].answers[i-1];
                button.addEventListener("click", function(){this.checkAnswer(button.innerText);});
                question.appendChild(button);
            }
        }
        if (this.page < 4) {this.nextQuestion()}
        else {this.endGame()}
    }
    endGame () {

    }

}

    