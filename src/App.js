import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Quiz data
  const quizData = [
    {
      question: "Where do you want to go?",
      options: [
        { text: "Night Market", points: 10 },
        { text: "Eat Around AU", points: 10 },
        { text: "Mega", points: 10 },
        { text: "I have no idea", points: 2 }
      ]
    },
    {
      question: "What do you want to eat?",
      options: [
        { text: "Buffet", points: 10 },
        { text: "Thai Food", points: 10 },
        { text: "Indian Food", points: 10 },
        { text: "I have no idea", points: 2 }
      ]
    },
    {
      question: "What time do you want to go out?",
      options: [
        { text: "Night", points: 10 },
        { text: "Morning", points: 10 },
        { text: "Afternoon", points: 10 },
        { text: "I have no idea", points: 2 }
      ]
    },
    {
      question: "What color should I wear on that day?",
      options: [
        { text: "black", points: 10 },
        { text: "white", points: 10 },
        { text: "blue", points: 10 },
        { text: "I have no idea", points: 2 }
      ]
    },
    {
      question: "What is your favorite way to cheer up when we meet on that day?",
      options: [
        { text: "Kiss", points: 10 },
        { text: "Hug", points: 10 },
        { text: "Tiggle", points: 10 },
        { text: "I have no idea", points: 2 }
      ]
    },
    {
      question: "What dessert would you like to eat?",
      options: [
        { text: "Bubble Tea", points: 10 },
        { text: "Stawberry Milk Shake", points: 10 },
        { text: "Snacks", points: 10 },
        { text: "I have no idea", points: 2 }
      ]
    },
    {
      question: "Which day would you like to go?",
      options: [
        { text: "Saturday", points: 10 },
        { text: "Sunday", points: 10 },
        { text: "Friday", points: 10 },
        { text: "After Final Exam", points: 10 },
        { text: "I have no idea", points: 2 }
      ]
    }
  ];

  // Handle option selection
  const handleAnswer = (points) => {
    setScore(score + points); // Add points to the score
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1); // Move to the next question
    } else {
      setShowResult(true); // Show results after the last question
    }
  };

  // Render the result screen
  const getResultMessage = () => {
    if (score >= 40) return "Yay!! Lets Goooo! 💖";
    return "Puutuu don't love me anymore? 😭";
  };

  return (
    <div className="App">
      {/* Header with Bouncing Heart */}
      <header>
        <h1>
          <span className="bouncing-heart">❤️</span> 
          <span className="title-text">Date Me!</span>  
          <span className="bouncing-heart">❤️</span>
        </h1>
        <p className="subtitle">Koko Twet Vday Plan Ywe Pay!</p>
      </header>

      {/* Main Content */}
      <main>
        {!showResult ? (
          <div className="quiz-container">
            <h2>Question {currentQuestion + 1}</h2>
            <p className="question">{quizData[currentQuestion].question}</p>
            <ul className="options">
              {quizData[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <button onClick={() => handleAnswer(option.points)}>
                    {option.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="result-container">
            <p className="result-message">{getResultMessage()}</p>
            {/* Show GIF only when showResult is true */}
            <div className="cat-gif">
              <img
                src={
                  score >= 40
                    ? "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGdjOHpvems4aHprZTRqejZyOTdyOWNjb2pvcXBleGkxcnExNXplOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TKSLd3q4TFh9jKzdQX/giphy.gif" // Happy cat
                    : "https://media.giphy.com/media/RGjdQ8D1vVjvAnOYG6/giphy.gif?cid=ecf05e47b1fbw6aj8roisfx8rhy8z6ho6e0i2d9yro6macfc&ep=v1_gifs_related&rid=giphy.gif&ct=g" // Confused cat
                }
                alt="Funny Cat"
                width="300"
              />
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer>
        <p>Made with ❤️ for Valentine's Day</p>
      </footer>
    </div>
  );
}

export default App;