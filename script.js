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

const questionText = document.getElementById("question");
const optionsText = document.getElementById("options");
const answerText = document.getElementById("answer");
const score = document.getElementById("score");
const nextQuestion = document.getElementById("next-question");

let currentIndex = 0; // Track the current question index, starting at 0

// Function to display the current question in the HTML
function displayQuestion() {
  questionText.textContent = questions[currentIndex].question;
}

displayQuestion(); // Call the function to display the first question when the page loads
