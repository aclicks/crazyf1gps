class CrazyGPs {
 constructor () {
    this.name = "";
    this.score = 0;
    this.questions = [
        { question: "Who won the 2008 Singapore GP?",
        answers: ["Felipe Massa", "Lewis Hamilton", "Kimi Räikkönen", "Robert Kubica", "Fernando Alonso"],
        correctAnswer: "Fernando Alonso",},
        { question: "Who won the 2012 Spain GP?",
        answers: ["Pastor Maldonado", "Lewis Hamilton", "Kimi Räikkönen", "Romain Grosjean", "Fernando Alonso"],
        correctAnswer: "Pastor Maldonado",},
        { question: "Who won the 2017 Azerbaijan GP?",
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


        console.log("click");
    }

    showQuestion () {
        //renderizar questão 1 e respostas da 1 no html
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

    