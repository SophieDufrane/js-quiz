const questions = [
  {
    question: "What does 'typeof null' return in JavaScript?",
    options: ["null", "undefined", "object", "boolean"],
    answer: "object",
  },
  {
    question: "Which method removes duplicates from an array?",
    options: ["filter()", "map()", "new Set()", "reduce()"],
    answer: "new Set()",
  },
  {
    question: "What does '===' check compared to '=='?",
    options: ["Value only", "Value and type", "Type only", "Reference only"],
    answer: "Value and type",
  },
];

const question = document.getElementById("question");
const options = document.getElementById("options");
const answer = document.getElementById("answer");
const score = document.getElementById("score");
const nextQuestion = document.getElementById("next-question");
