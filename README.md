# JavaScript Quiz App

A vanilla JavaScript quiz app to test and reinforce core JS concepts through multiple choice questions.

## Tech Stack

- Frontend: HTML, CSS, JavaScript (vanilla)
- Backend: None
- Database: None — data stored as JS array

## Features

- Multiple choice questions on JavaScript fundamentals
- Instant feedback on each answer (correct/incorrect)
- Score tracking throughout the quiz
- Auto-reset and replay at the end of the session

## Project Setup

[Commands to run the project]

## Development Flow

### Setup

- Initial setup: project structure and gitignore

### Iteration 1 — Static HTML structure

- Add HTML structure with question, answers and score placeholders

### Iteration 2 — Questions data and DOM targeting

- Add questions data and target DOM elements

### Iteration 3 — Display first question dynamically

- Display first question dynamically from questions array
- Display question options dynamically
- Refactor display functions into one displayQuestion()

### Iteration 4 — Answer checking

- Add answer checking with correct/incorrect feedback

### Iteration 5 — Navigation

- Add logic to go to next question
- Refactor displayQuestion to clear options list

### Iteration 6 — Score tracking

- Add score tracking — increment on correct answer

### Iteration 7 — End of quiz

- Add end of quiz logic with score alert and session reset

### Iteration 8 — HTML Refactor

- Refactor HTML: add header/main/footer, replace li with buttons

### Iteration 9 — Visual Feedback on Answer Selection

- Add CSS classes and JS logic for correct/incorrect button feedback, disable all buttons after selection

### Iteration 10 — Next Question Button Visibility

- Hide Next Question button by default, show only after answer is validated

### Iteration 11 — Fix Answer Feedback Persistence

- Reset answer text with `innerHTML = ""` in `displayQuestion()` instead of toggling display

## Refactoring & Decisions

[Technical choices, why]

## Lessons Learned

[What we should do differently and why]

## Areas for Improvement

[Future functionnalities, improvements]
