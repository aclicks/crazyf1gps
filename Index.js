class CrazyGPs {
 constructor () {
    this.name = "";
    this.score = 0;
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

        introPage.classList.add("hide");

        gameBoard.classList.remove("hide");
    }

    showQuestion () {
        let question1 = document.querySelector(".question1");
        let answer1 = document.querySelector(".answer1");
        let answer2 = document.querySelector(".answer2");
        let answer3 = document.querySelector(".answer3");
        let answer4 = document.querySelector(".answer4");
        let answer5 = document.querySelector(".answer5");
        question1.innerText  = this.questions[0].questionEasy
        answer1.innerText = this.questions[0].answers[0];
        answer2.innerText = this.questions[0].answers[1];
        answer3.innerText = this.questions[0].answers[2];
        answer4.innerText = this.questions[0].answers[3];
        answer5.innerText = this.questions[0].answers[4];
    }

    checkAnswer () {
        //comparar respostas
    }

    checkStatus () {
        //verificar condição de derrota
    }

    showTips () {
        //mostrar dicas
    }

    nextQuestion () {
        //chamar próxima questão
    }
}

    