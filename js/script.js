const questions = [
  {
    question: "What is the difference between let and var?",
    options: [
      "let is block-scoped, var is function-scoped",
      "var is block-scoped, let is function-scoped",
      "They are identical",
      "let can only store strings",
    ],
    answer: "let is block-scoped, var is function-scoped",
  },
  {
    question: "What does '===' check compared to '=='?",
    options: ["Value only", "Value and type", "Type only", "Reference only"],
    answer: "Value and type",
  },
  {
    question: "What does typeof null return in JavaScript?",
    options: ["null", "undefined", "object", "boolean"],
    answer: "object",
  },
  {
    question: "Which array method creates a new array with transformed values?",
    options: ["forEach()", "filter()", "map()", "push()"],
    answer: "map()",
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A function that can access variables from its outer scope",
      "A variable declared with const",
      "A way to close a browser window",
      "A type of loop",
    ],
    answer: "A function that can access variables from its outer scope",
  },
  {
    question: "What does JSON.parse() do?",
    options: [
      "Converts a JavaScript object to JSON text",
      "Converts JSON text into a JavaScript object",
      "Removes invalid JSON values",
      "Formats JSON for display",
    ],
    answer: "Converts JSON text into a JavaScript object",
  },
  {
    question: "What is event bubbling?",
    options: [
      "An event that only runs on buttons",
      "An event moving from child elements up to parent elements",
      "A way to stop all events",
      "A method for delaying execution",
    ],
    answer: "An event moving from child elements up to parent elements",
  },
  {
    question: "What does Array.prototype.filter() return?",
    options: [
      "A modified original array",
      "A new array containing matching elements",
      "A single boolean value",
      "A string representation of the array",
    ],
    answer: "A new array containing matching elements",
  },
  {
    question: "What is the difference between null and undefined?",
    options: [
      "null means an intentional empty value, undefined means not assigned",
      "They mean exactly the same thing",
      "undefined is only for numbers",
      "null is only used in arrays",
    ],
    answer:
      "null means an intentional empty value, undefined means not assigned",
  },
  {
    question: "Which keyword declares a constant reference?",
    options: ["let", "var", "const", "static"],
    answer: "const",
  },
];

const questionText = document.getElementById("question");
const optionsText = document.getElementById("options-container");
const answerText = document.getElementById("answer");
const score = document.getElementById("score");
const nextQuestion = document.getElementById("next-question");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const playAgainButton = document.getElementById("play-again");

let currentIndex = 0; // Track the current question index, starting at 0
let currentScore = 0; // Initialize the score to 0

// Function to display the current question and options in the HTML
function displayQuestion() {
  resultContainer.style.display = "none"; // Hide the result container when displaying a new question
  nextQuestion.style.display = "none"; // Hide the "Next Question" button until an answer is selected
  questionText.textContent = questions[currentIndex].question; // Set the question text in the HTML to the current question's text
  optionsText.innerHTML = ""; // Clear the options container in the HTML before adding new options for the current question
  answerText.innerHTML = ""; // Clear the answer text in the HTML before displaying the result of the current question
  answerText.className = ""; // Reset the answer feedback styling for the next question
  questions[currentIndex].options.forEach((option) => {
    // Loop through each option for the current question
    const button = document.createElement("button"); // Create a new list item element for each option
    button.classList.add("option-button"); // Add a class to the list item for styling purposes
    button.textContent = option; // Set the text content of the list item to the option text
    button.addEventListener("click", checkAnswer); // Add a click event listener to the list item to check the answer when clicked
    optionsText.appendChild(button); // Append the list item to the options list in the HTML
  });
}

// Function to check if the selected answer is correct and display the appropriate message in the HTML
function checkAnswer(event) {
  if (event.target.textContent === questions[currentIndex].answer) {
    answerText.className = "answer-feedback answer-correct";
    answerText.textContent = "Spot on!"; // Set the answer text in the HTML to a success message if the answer is correct
    event.target.classList.replace("option-button", "option-button-correct"); // Replace the class of the clicked button to indicate a correct answer
    ++currentScore; // Increment the score by 1 if the answer is correct
  } else {
    answerText.className = "answer-feedback answer-incorrect";
    answerText.textContent = `Oops... The answer was ${questions[currentIndex].answer}`;
    event.target.classList.replace("option-button", "option-button-incorrect"); // Replace the class of the clicked button to indicate an incorrect answer
    currentScore; // The score remains the same if the answer is incorrect
  }
  // Disable all option buttons after an answer is selected to prevent multiple answers
  optionsText
    .querySelectorAll("button")
    .forEach((button) => (button.disabled = true));
  nextQuestion.style.display = "block"; // Show the "Next Question" button after an answer is selected
}

// Function to reset the quiz and start over by resetting the current question index and score, and displaying the first question and options in the HTML
function endSession() {
  currentIndex = 0; // Reset the current question index to 0 to start over
  currentScore = 0; // Reset the score to 0 to start over
  quizContainer.style.display = "flex"; // Show the quiz container in the HTML to start the quiz again
  displayQuestion(); // Call the function to display the first question and options in the HTML
}

// Function to go to the next question when the "Next Question" button is clicked and check if the quiz is finished to display the final score and reset the quiz
function goToNextQuestion() {
  // Check if the current question index is at the last question in the array
  if (currentIndex === questions.length - 1) {
    quizContainer.style.display = "none"; // Hide the quiz container in the HTML when the quiz is finished
    resultContainer.style.display = "block"; // Show the result container in the HTML when the quiz is finished
    score.textContent = `Your Score: ${currentScore} / ${questions.length}`; // Set the score text in the HTML to display the final score and total number of questions
    playAgainButton.addEventListener("click", endSession); // Add a click event listener to the "Play Again" button to call the function that resets the quiz and starts over when clicked
  } else {
    currentIndex++; // Increment the current question index to move to the next question
    displayQuestion(); // Call the function to display the next question and options in the HTML
  }
}

nextQuestion.addEventListener("click", goToNextQuestion); // Add a click event listener to the "Next Question" button to call the function that goes to the next question when clicked

displayQuestion(); // Call the function to display the first question and options when the page loads
