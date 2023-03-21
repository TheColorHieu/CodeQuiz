//creating the variables 
const startButton = document.getElementById('start-btn')
const nexttButton = document.getElementById('next-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let  shuffledQuestions, currentQuestionIndex

// creating the event for when the button is clicked 
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

  //this starts the game and hides the first box
  function startGame() {
    //this allows after you select the start game itll hide the box
    startButton.classList.add('hide')
    //were shuffling questions with this next line of code 
    // shuffledQuestions = questions.sort(() => Math.random() - .5)
    //the first question
    currentQuestionIndex = 0
    //were shuffling questions with this next line of code 
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
  }
  //function to set next question
  function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
  }
  //function to grab the question
  function showQuestion(question){
    questionElement.innerText = question.question
    //appending the answers to the buttons 
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innedText = answer.text
        button.classList.add('btn')
        //setting a condition to let us move on if true
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)


    })
    //reseting the questions
    function resetState() {
      clearStatusClass(document.body)
      nextButton.classList.add('hide')
      while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
      }
    }

    //creating the function to pick the correct class
    function selectAnswer(e) {
      const selectedButton = e.target
      const correct = selectedButton.dataset.correct
      setStatusClass(document.body, correct)
      Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
      })
      if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
      } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
      }
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
}