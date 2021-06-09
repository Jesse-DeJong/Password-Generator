// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Validation Arrays
var validation = ["y", "yes"];
var validationNeg = ["n", "no"];


var valid = false;
var userInput = "";
var passwordIncludes = [];

// User prompts
var Prompt = "";
var lowercasePrompt = "lowercase";
var uppercasePrompt = "UPPERCASE";
var numericalPrompt = "Numerical";
var specialPrompt = "Special";


// Generate Password Function
function generatePassword() {
  Prompt = "lowercase";
  validationLoop();
  Prompt = "UPPERCASE";
  validationLoop();
  Prompt = "Numerical";
  validationLoop();
  Prompt = "Special";
  validationLoop();
  console.log(passwordIncludes);
}

var validationLoop = function (userInput, Promt) {
  // Create loop (100 Iterations)
  for (i = 0; i < 100; i++) {
    var userInput = window.prompt("Should the password include [" + Prompt + "] characters?");
 // Convert to lowercase for comparisons
 userInput = userInput.toLowerCase();    
   if (validation.includes(userInput)) {
     valid = true;
     passwordIncludes.push(Prompt);
     break;
   } else if (validationNeg.includes(userInput)) {
    valid = true;
    break;
 }

 // reset validation toggle
  valid = false;
  userInput = "";
}
};