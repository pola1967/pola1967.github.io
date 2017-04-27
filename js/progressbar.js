//These variables correspond to the mainquiz.js, this lets the progress bar know which elements to tak einto account
var totalQuestions = mainQuestions.length;
var currentQuestion = 0;
//The variable corresponds with the id set within the HTML, this allows the function to know which bar to increment
var $progressbar = $("#progressbar");
//Function which increment the created bar, every time the next button is clicked, the bar won't increment even if a user has clicked the next button by accident.
$("#nextButton").on("click", function(){
  if (currentQuestion >= totalQuestions){ return; }
  $progressbar.css("width", Math.round(100 * currentQuestion / totalQuestions) + "%");
});