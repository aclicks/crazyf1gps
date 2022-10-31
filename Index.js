class crazyGPs {
 constructor (name, score, questions, result) {
    this.name = name;
    this.score = score;
    this.questions = questions;
    this.result = result;
    }

    score = 0;
    questions = [
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
    result = 0;
    name = "";
    play () {
        let introPage = this.document.getElementsByClassName("introPage");
        let qPage = this.document.getElementsByClassName("qPage")
        introPage.display = "none";
        console.log("click");
    }
}

document.querySelector("playBtn").addEventListener("click", play);
