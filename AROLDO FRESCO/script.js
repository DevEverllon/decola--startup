const btnReni = document.querySelector(".reniciar");

const quizData = [
  {
    question:
      "Foi considerada a primeira rede de computadores, estamos falando da...?",
    options: ["ARPANET", "INTRANET", "WWW", "HTTP"],
    correct: "ARPANET",
  },
  {
    question: "A popularização da internet aconteceu em qual década?",
    options: ["1970", "1980", "1990", "2000"],
    correct: "1990",
  },
  {
    question: "Qual p nome do conceito que conecta objetos com a internet?",
    options: ["HTTP", "Web 2.0", "ARPANET", "Internet das Coisas (IoT)"],
    correct: "Internet das Coisas (IoT)",
  },
];

let currentQuestionIndex = 0;
let score = 0;

// Inicializa o quiz
function loadQuiz() {
  const currentQuestion = quizData[currentQuestionIndex];
  document.getElementById("question").innerText = currentQuestion.question;
  const options = document.getElementsByClassName("option");

  for (let i = 0; i < options.length; i++) {
    options[i].innerText = currentQuestion.options[i];
    options[i].onclick = () => checkAnswer(currentQuestion.options[i]);
  }
}

function checkAnswer(selectedOption) {
  const correctAnswer = quizData[currentQuestionIndex].correct;
  if (selectedOption === correctAnswer) {
    score++;
    document.getElementById("score").innerText = `Pontuação: ${score}`;
  }
  document.getElementById("next-button").style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuiz();
    document.getElementById("next-button").style.display = "none";
  } else {
    displayResult();
  }
}

// Função de exibição do resultado do quiz
function displayResult() {
  document.getElementById("quiz-container").innerHTML = `
        <h2>Você completou o quiz!</h2>
        <br>
        <p>Pontuação final: ${score} de ${quizData.length}</p>
    `;
}

function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById("score").innerText = "Pontuação: 0";
  loadQuiz();
}

loadQuiz();
