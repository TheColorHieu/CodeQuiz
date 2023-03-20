//creating the variables 
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')



// creating the event for when the button is clicked 
startButton.addEventListener("click", startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
//this starts the game and hides the first box
function startGame() {
    console.log('started')
    //this allows after you select the start game itll hide the box
    startButton.classList.add('hide')
    //making the question container appear
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

  }
  function setNextQuestion(){

  }
  function selectAnswer(){
    
  }
  //making the questions 
  const questions = [
    {
        question: 'What is 2+2?',
        answer: [
            {text: '4', corect: true},
            {text: '1', corect: false},
            {text: '3', corect: false},
            {text: '5', corect: false}

        ]
    }

  ]