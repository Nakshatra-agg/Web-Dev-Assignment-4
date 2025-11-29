// JavaScript Quiz Game
// Lab Assignment 4
// Created by: Nakshatra Aggarwal
// Runs completely in the browser console

// Step 1: Create an array of quiz questions and answers
const quizQuestions = [
  { question: "What does CPU stand for?", answer: "central processing unit" },
  { question: "Which language is used to style web pages? (HTML / CSS / JS)", answer: "css" },
  { question: "How many days are there in a week?", answer: "7" },
  { question: "Which data type stores true or false values in JavaScript?", answer: "boolean" },
  { question: "Who is known as the father of computers? (Hint: Charles ___)", answer: "babbage" },

  // 10 extra questions
  { question: "What does RAM stand for?", answer: "random access memory" },
  { question: "Which company created the Windows operating system?", answer: "microsoft" },
  { question: "What symbol is used for single-line comments in JavaScript?", answer: "//" },
  { question: "How many continents are there on Earth?", answer: "7" },
  { question: "Which HTML tag is used for the largest heading?", answer: "<h1>" },
  { question: "Which device is used to input text into a computer?", answer: "keyboard" },
  { question: "Which keyword is used to declare a variable in JavaScript? (var / let / const)", answer: "let" },
  { question: "What is the freezing point of water in Celsius?", answer: "0" },
  { question: "Which planet is closest to the Sun?", answer: "mercury" },
  { question: "Which unit is used to measure processor speed? (GHz)", answer: "ghz" }
];

// Step 2: Define the main function to run the quiz
function runQuiz() {
  let score = 0; // Step 3: Initialize score

  // Step 4: Loop through each question
  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(`Question ${i + 1}: ${quizQuestions[i].question}`);

    // Step 6: Normalize input (toLowerCase and trim)
    if (userAnswer) {
      userAnswer = userAnswer.toLowerCase().trim();
    } else {
      userAnswer = "";
    }

    // Step 7: Check the answer
    if (userAnswer === quizQuestions[i].answer) {
      alert("✅ Correct!");
      score++; // increase score for correct answer
    } else {
      alert(`❌ Wrong! The correct answer is "${quizQuestions[i].answer}".`);
    }
  }

  // Step 9: Show final score
  alert(`🎯 Quiz Complete!\nYour Final Score: ${score} out of ${quizQuestions.length}`);
}

// Step 10: Run the quiz
runQuiz();
