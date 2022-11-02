class CrazyGPs {
 constructor () {
    this.name = "";
    this.score = 30;
    this.questions = [
        { questionEasy: "Who won the 2008 Singapore GP?",
        answers: ["Felipe Massa", "Lewis Hamilton", "Kimi Räikkönen", "Robert Kubica", "Fernando Alonso"],
        correctAnswer: "Fernando Alonso",
        tips: ["Massa and Hamilton fought for the title", "Nelson Piquet Jr.", "Crashgate", "The Spaniard"]},
        { questionEasy: "Who won the 2012 Spain GP?",
        answers: ["Pastor Maldonado", "Lewis Hamilton", "Kimi Räikkönen", "Romain Grosjean", "Fernando Alonso"],
        correctAnswer: "Pastor Maldonado",
        tips: ["Vettel and Alonso fought for the title", "His only win in Formula 1", "Wreckless driver", "PDVSA"]},
        { questionEasy: "Who won the 2017 Azerbaijan GP?",
        answers: ["Max Verstappen", "Lewis Hamilton", "Lance Stroll", "Daniel Ricciardo", "Mick Schumacher"],
        correctAnswer: "Daniel Ricciardo",
        tips: ["Ferrari and Mercedes were the best teams", "Doesn't have a contract for 2022", "He likes a shoey", "The smile guy"]},
        { questionEasy: "Who won the 2020 Italy GP?",
        answers: ["Esteban Ocon", "Lewis Hamilton", "Lance Stroll", "Pierre Gasly", "Carlos Sainz"],
        correctAnswer: "Pierre Gasly",
        tips: ["Lewis Hamilton got a penalty", "Was a RedBull driver", "Daniel Riccardo loves him", "Is french"]},
        { questionEasy: "Who won the 2021 Italy GP?",
        answers: ["Esteban Ocon", "Daniel Riccardo", "Lando Norris", "Pierre Gasly", "Carlos Sainz"],
        correctAnswer: "Daniel Riccardo",
        tips: ["Big Crash at turn 1", "Was a RedBull driver", "Other drivers don't like his podium rituals", "His country has kangaroos"]},
        { questionEasy: "Who won the 2019 Germany GP?",
        answers: ["Daniil Kvyat", "Sebastian Vettel", "Romain Grosjean", "Robert Kubica", "Max Verstappen"],
        correctAnswer: "Max Verstappen",
        tips: ["Rainy race", "Mercedes did 10 pitstops", "Redbull Driver", "Orange"]},
        { questionEasy: "Who won the 2019 Germany GP?",
        answers: ["Daniil Kvyat", "Sebastian Vettel", "Romain Grosjean", "Robert Kubica", "Max Verstappen"],
        correctAnswer: "Max Verstappen",
        tips: ["Rainy race", "Mercedes did 10 pitstops", "Redbull Driver", "Orange"]},
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
            e1.addEventListener("click", e => this.checkAnswer(e1.innerText));
        })
       
    }

    checkAnswer (textToCheck) {
        let timeout;
        if (this.questions[this.round].correctAnswer === textToCheck) {
            timeout = setTimeout(e => this.checkStatus(), 1000);
        }
        else {
            this.score -= 10;
            let remain = document.querySelector(".score")
            remain.innerText = this.score+" points left";
            timeout = setTimeout(e => this.checkStatus(), 1000);
        }
        let btnColors = document.querySelectorAll(".shake")
        btnColors.forEach (e1 => {
            if (e1.innerText === this.questions[this.round].correctAnswer){
                e1.style.background = "green";
            }
            else {
                e1.style.background = "red";
            }
            setTimeout(e => e1.style.background = "#a7a7a7", 1000)
        })




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
        const tips = document.querySelectorAll(".tips");
        this.forEach ((e1, i) => {
            e1.innerText = this.questions[this.round].tips[i];
        })

    }

    endGame () {
        let gameBoard = document.querySelector("#gameBoard");
        let resultPage = document.querySelector("#resultPage");

        gameBoard.classList.add("hide");
        
        resultPage.classList.remove("hide");
        let bg = document.querySelector(".background");

        if (this.score === 0){
            let lose = document.querySelector("#lose");
            lose.classList.remove("hide");
            bg.style.backgroundImage = "url('Imgs/lose.jpg')";
            lose.innerText = `${this.name}, you were lapped by Latifi! And it was raining!`
        }
        else{
            let won = document.querySelector("#won");
            won.classList.remove("hide");
            bg.style.backgroundImage = "url('Imgs/won.png')";
            won.innerText = `${this.name}, you won! Was Briatore your team principal?`
        }
    }

}

    