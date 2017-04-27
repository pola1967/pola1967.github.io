//This check if all set validations within the form work
var formFinished = false;

function validate(form) {
	fail = validateFirstname(form.firstname.value);
	fail +=validateLastname(form.lastname.value);
	fail +=validateMobileNo(form.mobilenumber.value);
	fail +=validateEmail(form.email.value);
	
	if (fail == "") {
		formFinished = true;
		return true;
	} else {
		alert(fail);
		return false;
	}
}
//To check if First name was left blank
function validateFirstname(field) {
	
	if (field == "")
		return "No First Name was entered, please enter First Name.\n";	
		return "";
}
//To check if Last Name was left black and that both capital and small letters are used, previous function is repeated but on Last Name field
function validateLastname(field) {
	if (field == "")
		return "No Last Name was entered, please enter Last Name.\n";
		return "";
}
//To check if Mobile number was left black and only numeric numbers were used and that a mobile number is no less than 10 digits
function validateMobileNo(field) {
	if (field == "")
		return "No Mobile No. was entered, please enter a valid Mobile No.\n";
	
	else if (field.length <10)
		return "The Mobile No. entered is not valid, please enter a valid Mobile No.\n";
	
	else if (!/[0-9()]/.test(field))
		return "Only numeric digits 0-9 are acceptable, brackets () may be used to for international Mobile No.'s .\n";
	
	return "";
}
//To check if Email was left blank and to make sure than the Email entered is valid.
 function validateEmail(field) {
	 if (field == "")
		 return "No Email was entered, please enter a valid Email.\n";
	 
	 else if (!((field.indexOf(".") > 0) &&
				(field.indexOf("@") > 0)) ||
				/[^a-zA-Z0-9.@_-]/.test(field))
				return "The Email address entered is invalid, please enter a valid Email address.\n";
				
				return "";
 }
//This validation is set for the button 'Take the Quiz!' this is set so that the user fills out the form before proceeding to the quiz
 function validate_activity() {
	 if (formFinished == true) {
		 //links the index.html to the quiz.hmtml
		 window.location.href = "./Quiz.html";
	 } else {
		alert("Fill in the form first!");
	 }
 }