
// creates a variable with the generate button from the HTML file by using its id name
var generateBtn = document.querySelector("#generate");
// uses the previously declared generate button variable to create a click event, which calls the displayPassword function
generateBtn.addEventListener("click", displayPassword);

// declaring variables outside of their functions to make them globally accessible
// userLength is 8 because it is the lowest number the user might choose to create their password  
var userLength = 8;
// passwordChoices is an undefined array because it will later be defined by the user's password choices in the generatePassword function
var passwordChoices = [];
// arrays with each of the options the user might choose from when determining what elements they'd like their password to contain
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// certain symbols need to use \ to prevent default code actions
var symbols = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// this function calls the generatePassword function to actually display the password in the website's text box
function displayPassword() {
    // setting a variable to call the generatePassword function, not using "password" so the two variable don't get confused
    var actualPassword = generatePassword();
    // setting another variable to identify the password text box from the HTML, where the generated password will go once this function runs
    var passwordText = document.querySelector("#password");
    // the text content of the empty text box will display the password generated from the generatePassword function
    passwordText.textContent = actualPassword;
    }

// this function will create the password to be displayed on the page 
function generatePassword() {
    // asks the user how long they'd like their password to be, within a certain range
    userLength = parseInt(prompt("Enter a number between 8 and 128 to determine your desired password length."));
    // if the user types a value that is not a number (types the number alphabetically, etc) or outside the desired password length an alert will ask the user to choose differently. 
    if (isNaN(userLength) || userLength <= 7 || userLength >= 129) {
    alert("Password length must be between 8 and 128 characters. Please make a different selection.");
    // restarts the function, it works in this context since user will have to go through all the prompts anyway
    generatePassword();
    }

    // creating variables from window confirmations to ask users what they'd like to use in their random passwords
    var lowercaseChoice = confirm("Would you like to use lowercase letters in your password?");
    var uppercaseChoice = confirm("Would you like to use uppercase letters in your password?");
    var numbersChoice = confirm("Would you like to use numbers in your password?");
    var symbolsChoice = confirm("Would you like to use symbols in your password?");
      // a loop when user doesn't choose at least one of the elements to include in their password
      // without these variables and this loop, the application will return "undefined" which is confusing for the user
      while (!lowercaseChoice && !uppercaseChoice && !numbersChoice && !symbolsChoice) {
        alert("You must choose at least one password element to create your password.");
        var lowercaseChoice = confirm("Would you like to use lowercase letters in your password?");
        var uppercaseChoice = confirm("Would you like to use uppercase letters in your password?");
        var numbersChoice = confirm("Would you like to use numbers in your password?");
        var symbolsChoice = confirm("Would you like to use symbols in your password?");
      }
    
    // declaring the empty array to be filled with user's choices from the arrays already declared above the function
    passwordChoices = [];
    // concatenating all the choices the user did (or didn't) make from the confirmation prompts above
    // if the user chooses lowercase letters, the lowercase array will be concatenated into previously undefined passwordChoices array
    if (lowercaseChoice) {
      passwordChoices = passwordChoices.concat(lowercase);
    }
    // if the user chooses uppercase letters, the uppercase array will be concatenated into the previously undefined passwordChoices array
    if (uppercaseChoice) {
      passwordChoices = passwordChoices.concat(uppercase);
    }
    // if the user chooses numbers, the numbers array will be concatenated into the previously undefined passwordChoices array
    if (numbersChoice) {
      passwordChoices = passwordChoices.concat(numbers);
    }
    // if the user chooses symbols, the symbols array will be concatenated into the previously undefined passwordChoices array
    if (symbolsChoice) {
      passwordChoices = passwordChoices.concat(symbols);
    }
 
    // delcaring undefined variable in order to appropriately fill it with user's choices
    var password = "";

    // randomizing the user's choices with a loop using random characters from the passwordChoices array 
    for (var i = 0; i < userLength; i++) {
    var randomCharacters = Math.floor(Math.random() * passwordChoices.length);
    //taking the undefined password variable and filling it with those now randomized choices
    password = password + passwordChoices[randomCharacters];
    }
    return password;
}













