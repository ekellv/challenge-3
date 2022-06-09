// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

function writePassword() {

var passwordChoices = "";
var ultimatePassword = "";

  var length = window.prompt("Enter a number between 8 and 128 to determine your desired password length.");
    
    if (length <= 7 || length >= 129) {
    alert("Password length must be between 8 and 128 characters. Please make a different selection.");
    var length = window.prompt("Enter a number between 8 and 128 to determine your desired password length.");
  } 

    var lowercase = window.confirm("Would you like to use lowercase letters in your password?");
      if (lowercase) {
        passwordChoices = passwordChoices.concat(lowercase);
      }
    
    var uppercase = window.confirm("Would you like to use uppercase letters in your password?");
      if (uppercase) {
        passwordChoices = passwordChoices.concat(uppercase);
      }

    var numbers = window.confirm("Would you like to use numbers in your password?");
    var symbols = window.confirm("Would you like to use symbols in your password?");
    
  
  if (!uppercase && !lowercase && !numbers && !symbols) {
    alert("You must choose at lease one password parameter to generate your password.");
    var lowercase = window.confirm("Would you like to use lowercase letters in your password?");
    var uppercase = window.confirm("Would you like to use uppercase letters in your password?");
    var numbers = window.confirm("Would you like to use numbers in your password?");
    var symbols = window.confirm("Would you like to use symbols in your password?");
  }

  var passwordCharacters = []

  

  if (uppercase) {
    passwordCharacters = passwordCharacters.concat(uppercase)
  }

  if (numbers) {
    passwordCharacters = passwordCharacters.concat(numbers)
  }

  if (symbols) {
    passwordCharacters = passwordCharacters.concat(symbols)
  }

  var password = "";
  for (var i=0; i < length; i++) {
   password = password + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
   console.log(password);
  }
  return password;
}

function printPassword() {
  var passwordPrint = writePassword();
  var passwordPaste = document.querySelector("#password");
  passwordPaste.value = passwordPrint;
}



// Add event listener to generate button

