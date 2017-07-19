
var ageIsCorrect = false;

while (ageIsCorrect == false) {
var userAge = prompt("What's your age, user?");	
  if (confirm("You entered " + userAge + ". Is that true?"))	{
    alert("Great! Your age is logged as " + userAge +".");
		ageIsCorrect = true;
	} else {
		userAge;
	}
};