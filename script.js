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

// Function to display the options for the current question in the HTML
function displayOptions() {
  questions[currentIndex].options.forEach((option) => {
    // Loop through each option for the current question
    const li = document.createElement("li"); // Create a new list item element for each option
    li.textContent = option; // Set the text content of the list item to the option text
    optionsText.appendChild(li); // Append the list item to the options list in the HTML
  });
}

displayQuestion(); // Call the function to display the first question when the page loads
displayOptions(); // Call the function to display the options when the page loads
