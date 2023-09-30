// Define your quiz questions and options
const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Jupiter', 'Venus', 'Mercury'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is the largest mammal?',
      options: ['Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
        correctAnswer: 'William Shakespeare',
      },
      {
        question: 'Which gas do plants absorb from the atmosphere?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 'Carbon Dioxide',
      },
      {
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Jupiter',
      },
      {
        question: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'Japan', 'South Korea', 'Vietnam'],
        correctAnswer: 'Japan',
      },
      {
        question: 'What is the chemical symbol for gold?',
        options: ['Go', 'Ag', 'Au', 'Pt'],
        correctAnswer: 'Au',
      },
      {
        question: 'Which gas makes up the majority of Earth\'s atmosphere?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 'Nitrogen',
      },
      {
        question: 'Who is known as the father of modern physics?',
        options: ['Isaac Newton', 'Albert Einstein', 'Stephen Hawking', 'Galileo Galilei'],
        correctAnswer: 'Albert Einstein',
      }
  ];
  
  // Initialize quiz variables
  let currentQuestionIndex = 0;
  let score = 0;
  
  // DOM elements
  const questionElement = document.getElementById('question');
  const choiceElements = [0, 1, 2, 3].map((i) => document.getElementById(`choice${i}`));
  const progressElement = document.getElementById('progress');
  
  // Function to load the current question and choices
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.options.forEach((option, index) => {
      choiceElements[index].textContent = option;
      choiceElements[index].addEventListener('click', handleChoiceClick);
    });
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  }
  
  // Function to handle user's choice
  function handleChoiceClick(event) {
    const selectedChoice = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedChoice === currentQuestion.correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  // Function to display the quiz result
  function showResult() {
    const totalQuestions = questions.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(2);
    questionElement.textContent = `Quiz Completed! Your Score: ${score}/${totalQuestions} (${percentage}%)`;
  
    // Hide choice buttons
    choiceElements.forEach((choiceElement) => {
      choiceElement.style.display = 'none';
    });
    //progressElement.style.display = 'none';

    // //remove event listener
    // choiceElements.forEach((choiceElement) => {
    //     choiceElement.style.display = 'none';
    // });
  
    // Display the restart button if needed
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Restart Quiz';
    restartButton.addEventListener('click', () => {
      currentQuestionIndex = 0;
      score = 0;
      loadQuestion();
      restartButton.style.display = 'none';
      choiceElements.forEach((choiceElement) => {
        choiceElement.style.display = 'block';
      });
      progressElement.style.display = 'block';
    });
  
    // Append the restart button to the quiz
    document.getElementById('quiz').appendChild(restartButton);
    progressElement.textContent = '';
  }
  
  // Start the quiz by loading the first question
  loadQuestion();
  