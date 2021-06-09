// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// // If someone can explain to me why this has to be here to be considered defined but the other functions don't....
var passwordGen = function (passwordIncludes) {
  // Run the loop for the desired length selected by the user
  for (i = 0; i < length; i++) {
    // Get random index from array passwordIncludes
    var index = Math.floor(Math.random() * length);
    var option = passwordIncludes[index];
    console.log(index, option);
    // Get random index from the randomly selected array 
    var index = Math.floor(Math.random() * option.length);
    console.log(index);
  }
}

// Generate Password Function
var generatePassword = function() {
  // Collect user input for what to include in the password
  lengthValidationLoop();
  Prompt = "lowercase";
  Prompt2 = lowercase;
  validationLoop();
  Prompt = "UPPERCASE";
  Prompt2 = UPPERCASE;
  validationLoop();
  Prompt = "Numerical";
  Prompt2 = Numerical;
  validationLoop();
  Prompt = "Special";
  Prompt2 = Special;
  validationLoop();
  console.log(passwordIncludes);
  passwordGen();
  }

// Validation Arrays
var validation = ["y", "yes"];
var validationNeg = ["n", "no"];

var valid = false;
var userInput = "";
var length = "";
var passwordIncludes = [];

// User prompts
var Prompt = "";
var Prompt2 = "";

// Password Construction Arrays
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var UPPERCASE = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var Numerical = ["1234567890"];
var Special = ["!@#$%^&*()-+_=,./?~"];

// (Length prompt) Reusable validation loop for user input
var lengthValidationLoop = function (userInput) {
  // Create loop (100 Iterations)
  for (i = 0; i < 100; i++) {
    var userInput = window.prompt("What is the desired length of the password [8 to 128] Characters?");
  
   if (userInput >= 8 && userInput <= 128) {
     valid = true;
     length = userInput;
     break;
   } 
 }

 // reset validation toggle
  valid = false;
  userInput = "";
};

// Reusable validation loop for user input
var validationLoop = function (userInput, Promt) {
  // Create loop (100 Iterations)
  for (i = 0; i < 100; i++) {
    var userInput = window.prompt("Should the password include [" + Prompt + "] characters?");
 // Convert to lowercase for comparisons
 userInput = userInput.toLowerCase();    
   if (validation.includes(userInput)) {
     valid = true;
     passwordIncludes.push(Prompt2);
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