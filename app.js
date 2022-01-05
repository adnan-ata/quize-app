
var quizData = [
    {
      question: "What is JavaScript?",
      a: "client side",
      b: "html",
      c: "server lang",
      d: "machine languge",
      correct: "a",
    },
    {
      question: "What is the full meaning of CSS?",
      a: "Cascading Style Server",
      b: "Cascade Styling Surface",
      c: "Cascading Surface Sheet",
      d: "Cascading Style Sheets",
      correct: "d",
    },
    {
      question: "What is the most popular programming language in 2022?",
      a: "Java",
      b: "PHP",
      c: "html",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "Which company developed JavaScript??",
      a: "Netscape .",
      b: "goolge",
      c: "mete company",
      d: "spice X",
      correct: "a",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Cascading Stylesheet",
      c: "JavaScript Object Notation",
      d: "Hyper Markup Language",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1998",
      b: "1993",
      c: "1995",
      d: "2000",
      correct: "c",
    },
    {
      question: "All these are Server Side Language except?",
      a: "HTML",
      b: "PHP",
      c: "Node.js",
      d: "Ruby on rails",
      correct: "a",
    },
    {
      question: "All these are JavaScript Framework except?",
      a: "Laravel",
      b: "React.js",
      c: "Node.js",
      d: "Vue.js",
      correct: "a",
    }
  ];
  
var score=0;
  // Getting where to insert the questions
var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var nextButton = document.getElementById("submit");

var currentQuiz = 0;

loadQuiz();


function loadQuiz() {
  
  deselectAnswer();

  var currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question; // Main Question
  a_text.innerText = currentQuizData.a; // Option a
  b_text.innerText = currentQuizData.b; // Option b
  c_text.innerText = currentQuizData.c; // Option c
  d_text.innerText = currentQuizData.d; // Option d
}

// Deselection Default Option
function deselectAnswer() {
    answerEls.forEach((answerEl) => {
      answerEl.checked = false;
    });
  }
  // Get Selected Option
function getSelected() {
    let answer;
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
  
    return answer;
  }
  function nextButtonfunc() {
    // Check to see the answer
    let answer = getSelected();
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
    }
    // Increment Upon Click
    currentQuiz++;
  
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2>You answered ${score} out of ${quizData.length} correctly.</h2>
       <button onclick="location.reload()">Retake Quiz!</button>`;
    }
  };
  
