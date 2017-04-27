//all variables are laid out
var currentQuestion = 0;
var score = 0;
var totQuestions = mainQuestions.length; //var which connect this JS file to the Array created in a seperate JS file

var container = document.getElementById('main-quiz');
var questionEl = document.getElementById('mainquestions');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var results = document.getElementById('result');
var wrongAnswers = [];
var rightAnswers=[];
var wrongLabel = document.getElementById('lblWrongAnswers');
var rightLabel = document.getElementById('lblRightAnswers');
var printResults = document.getElementById('printIt');
		printResults.style.visibility = 'hidden'; //Hides the print button until the user gets their results

//Loads the first question and the options 
function loadQuestion (mainquestionsIndex) {
	var q = mainQuestions[mainquestionsIndex]; // reference to the Questions array
	questionEl.textContent = (mainquestionsIndex + 1) + '. ' + q.Question; // states which question is first
	opt1.textContent = q.Option1;
	opt2.textContent = q.Option2;
	opt3.textContent = q.Option3;
	opt4.textContent = q.Option4;
};
//Loads the next question if an option has been checked from the first or pre question, if no option has been selected an alert will pop up 
function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');//determines how a right answer is chosen
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	//Each right answer will result in a score of 5 points, 20 right questions give 100 marks or 100%
	var answer = selectedOption.value;
	if(mainQuestions[currentQuestion].Answer == answer){
		score += 5; // increments the score by 5 everytime a right option has been chosen
		rightAnswers.push(currentQuestion + 1);//records the amount and number of right answers 
	} else{
			wrongAnswers.push(currentQuestion + 1);//records the amount and number of right answers 
			console.log(wrongAnswers)// records the amount and number of right answers  to the console
		}
	selectedOption.checked = false; //if wrong answer is chosen the next question will still load
	currentQuestion++; //
	// If statement to change Next Question button to Finish button
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	//If statement to determine whether all question have been answer and to display the hidden div that portrays the result by hiding the main quiz container
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		results.style.display = '';
		results.textContent = 'Your Score: ' + score + '%';
		wrongLabel.innerHTML = "You got questions " + wrongAnswers.toString() + " wrong"; //will display all wrong answers
		rightLabel.innerHTML = "You got " + rightAnswers.length + " questions right. (" + rightAnswers.toString() + ")"; //will display all right answers along with the amount of right answers
		printResults.style.visibility = '';//shows the print button upon results
		return;

	}
	loadQuestion(currentQuestion);
}
//function to print page
function printTestResult() {
	window.print();
}

loadQuestion(currentQuestion);

