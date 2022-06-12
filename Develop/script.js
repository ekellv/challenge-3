// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", printPassword);

// Write password to the #password input
var userLength = 8;
var passwordChoices = [];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function printPassword() {
  var actualPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = actualPassword;
  }

function generatePassword() {
    passwordChoices = []; 

    userLength = parseInt(prompt("Enter a number between 8 and 128 to determine your desired password length."));
    
    if (isNaN(userLength) || userLength <= 7 || userLength >= 129) {
    alert("Password length must be between 8 and 128 characters. Please make a different selection.");
    generatePassword();
    }

    if (confirm("Would you like to use lowercase letters in your password?")) {
      passwordChoices = passwordChoices.concat(lowercase);
    }
    if (confirm("Would you like to use uppercase letters in your password?")) {
      passwordChoices = passwordChoices.concat(uppercase);
    }
    if (confirm("Would you like to use numbers in your password?")) {
      passwordChoices = passwordChoices.concat(numbers);
    }
    if (confirm("Would you like to use symbols in your password?")) {
      passwordChoices = passwordChoices.concat(symbols);
    }

    if (!uppercase && !lowercase && !numbers && !symbols) {
      alert("You must choose at lease one password element to generate your password.");
      generatePassword();
    } 

    var password = "";

    for (var i = 0; i < userLength; i++) {
    var randomCharacters = Math.floor(Math.random() * passwordChoices.length);
    password = password + passwordChoices[randomCharacters];
    }
    return password;
}













