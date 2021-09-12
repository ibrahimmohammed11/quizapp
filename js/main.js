let quiz = document.getElementById("quiz");
let answerEls = document.querySelectorAll(".answer");
let questionEl = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

let quizData = [
  {
    question: "What is the most used programming language in 2021?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the President of US?",
    a: "Joe Biden",
    b: "Donald Trump",
    c: "Ivan Saldano",
    d: "Mihai Andrei",
    correct: "a",
  },
  {
    question: "What does HTML stand for?",
    a: "Cascading Style Sheet",
    b: "Hypertext Preprocessor",
    c: "Hypertext Markup Language",
    d: "Structured Query Language",
    correct: "c",
  },
  {
    question: "What is 2 + 2 ?",
    a: "22",
    b: "2",
    c: "1",
    d: "4",
    correct: "d",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "1997",
    correct: "b",
  },
];

loadQuiz();
function loadQuiz() {
  deselectAnswers();
  let currentQuesData = quizData[currentQuestion];
  questionEl.innerText = currentQuesData.question;
  a_text.innerText = currentQuesData.a;
  b_text.innerText = currentQuesData.b;
  c_text.innerText = currentQuesData.c;
  d_text.innerText = currentQuesData.d;
}

submitBtn.onclick = function () {
  answar = getSelected();
  console.log(answar);
  if (answar) {
    if (answar === quizData[currentQuestion].correct) {
      score++;
      // alert("Correct Answer");

      $.iaoAlert({
        msg: "Correct Answer",
        type: "success",
        mode: "dark",
        autoHide: true,
        alertTime: "3000",
        fadeTime: "500",
        closeButton: true,
        closeOnClick: true,
        fadeOnHover: true,
        position: "top-right",
        zIndex: "999",
        roundedCorner: false,
        alertClass: "",
      });
    } else {
      $.iaoAlert({
        msg: "Wrong Answer",
        type: "error",
        mode: "dark",
        autoHide: true,
        alertTime: "3000",
        fadeTime: "500",
        closeButton: true,
        closeOnClick: true,
        fadeOnHover: true,
        position: "top-right",
        zIndex: "999",
        roundedCorner: false,
        alertClass: "",
      });
    }
    currentQuestion++;

    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = "";
      Swal.fire({
        icon: "success",
        title: `Your Score is ${score} from ${quizData.length}`,
        showConfirmButton: false,
        footer: `<button onclick="location.reload()" class="btn btn-success btn-block">Reset Quiz</button>`,
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: `please enter your answar`,
    });
  }
};

function getSelected() {
  let answar;
  answerEls.forEach((answerEls) => {
    if (answerEls.checked) {
      answar = answerEls.id;
    }
  });
  return answar;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
