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
    }

    play () {
        let gameBoard = document.querySelector("#gameBoard");
        let introPage = document.querySelector(".introPage");
        let resultPage = document.querySelector("#resultPage");

        introPage.classList.add("hide");
        resultPage.classList.add("hide");
        gameBoard.classList.remove("hide");

    }

    showQuestion () {
        const question = document.querySelector(".question1");
        question.innerText = this.questions[this.round].questionEasy;
        const button = document.querySelectorAll(".answer");
        button.forEach ((e1, i) => {
            e1.innerText = this.questions[this.round].answers[i];
            e1.addEventListener("click", e => {this.checkAnswer(e1.innerText)});
        })
       
    }

    checkAnswer (textToCheck) {
        if (this.questions[this.round].correctAnswer === textToCheck) {
            this.checkStatus();
        }
        else {
            this.score -= 10;
            let remain = document.querySelector(".score")
            remain.innerText = this.score+" points left";
            this.checkStatus()
        }
    }

    checkStatus () {
        if (this.score === 0){
            let remain = document.querySelector(".score")
            remain.innerText = this.score+" points left";
            this.endGame();
        }
        else {
            if (this.round < 2) {
                this.nextQuestion();
            }
            else {this.endGame()}
        }
    }

    showTips () {
        //mostrar dicas
    }

    nextQuestion () {
        this.round += 1;

        const question = document.querySelector(".question1");
        question.innerText = this.questions[this.round].questionEasy;
        const button = document.querySelectorAll(".answer");
        button.forEach ((e1, i) => {
            e1.innerText = this.questions[this.round].answers[i];
        })
    }

    endGame () {
        let gameBoard = document.querySelector("#gameBoard");
        let resultPage = document.querySelector("#resultPage");

        gameBoard.classList.add("hide");
        
        resultPage.classList.remove("hide");

        if (this.score === 0){
            let lose = document.querySelector("#lose")
            lose.classList.remove("hide")
        }
        else{
            let won = document.querySelector("#won")
            won.classList.remove("hide")
        }
    }

}

    