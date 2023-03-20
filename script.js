const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

// creating the event for when the button is clicked 
startButton.addEventListener("click", startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
//this starts the game and hides the first box
function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    
  }