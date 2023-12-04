let quesBox = document.querySelector("#quesBox");
let option = document.querySelectorAll(".option");
let cont_items = document.querySelector(".cont-items");

let questions = [
  {
    "ques": "Javascript is an _______ language?",
    "a": "Object-Oriented",
    "b": "Object-Based",
    "c": "Procedural",
    "d": "None of the above",
    "correct": "a",
  },

  {
    "ques": "Which of the following keywords is used to define a variable in Javascript?",
    "a": "Var",
    "b": "let",
    "c": "Both A and B",
    "d": "None of the above",
    "correct": "c",
  },

  {
    "ques": "Which of the following methods is used to access HTML elements using Javascript?",
    "a": "getElementById()",
    "b": "GetElementByClassName()",
    "c": "Both A and B",
    "d": "None of the above",
    "correct": "c",
  },

  {
    "ques": "Upon encountering empty statements, what does the Javascript Interpreter do?",
    "a": "Throws an error",
    "b": "Ignores the statements",
    "c": "Gives a warning",
    "d": "None of the above",
    "correct": "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
let showQuestion = () => {
  if (index === total) {
    return endQuiz();
  }
  reset();
  let data = questions[index];
  quesBox.innerText = `
  ${index + 1}. ${data.ques}
`;

  option[0].nextElementSibling.innerText = data.a;
  option[1].nextElementSibling.innerText = data.b;
  option[2].nextElementSibling.innerText = data.c;
  option[3].nextElementSibling.innerText = data.d;
};

let userSubmit = () => {
  let data = questions[index];
  let ans = getAnswer();
  console.log(ans,data.correct)

  if (ans == data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  showQuestion();
  return;
};

let getAnswer = () => {
  let answer;
  option.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

let reset = () => {
  option.forEach((input) => {
    input.checked = false;
  });
};

let endQuiz = () => {
  cont_items.innerHTML = `
<h3>Thanks for playing quiz</h3>
<h4> ${right} / ${total} correct</h4>
`;
};
showQuestion();
