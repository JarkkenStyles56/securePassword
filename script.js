// Constants
const generateBtn = document.querySelector("#generate");
const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

const allChars = []

let pwLength = prompt("How many characters do you want your password to be?")

let wantUpper = confirm("Do you want Uppercase?")

let wantSpecial = confirm("Do you want Special Characters?")

// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

/**
 * generate a password based on certain criteria
 */
function generatePassword(){

  // Password is currently blank! We need to make a better one
  let password = "";





  return password;
}

// Main Process

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)