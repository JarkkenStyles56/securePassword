// Constants
const generateBtn = document.querySelector("#generate");

let lowerChars = "abcdefghijklmnopqrstuvwxyz";

let nums = "0123456789";

let specChars = "!@#$%^&*()";

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let splitLower = lowerChars.split("");

let splitUpper = upperChars.split("");

let splitSpec = specChars.split("");

let splitNums = nums.split("");


let allChars = [];






// Functions

/**
 * writes a generated password to the #password
 */
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    let pwLength = prompt("How many characters do you want your password to be?");

    let wantLower = confirm("do you need Lowercase?");

    let wantUpper = confirm("Do you need Uppercase?");

    let wantSpecial = confirm("Do you need Special Characters?");

    let wantNumbers = confirm("Do you need Numbers?");


    if (pwLength < 8 || pwLength > 128) {

        alert("Password must be between 8 and 128 characters long")

    }

    if (wantLower) {
        allChars = allChars.concat(splitLower);
    }

    if (wantUpper) {
        allChars = allChars.concat(splitUpper);
    }

    if (wantSpecial) {
        allChars = allChars.concat(splitSpec);
    }

    if (wantNumbers) {
        allChars = allChars.concat(splitNums);
    }

    else {
        alert("Password must contain numbers, lowercase, uppercase, and special characters!")

        writePassword()

    }

    let num = (Math.floor(Math.random()) * 10) + pwLength.value;

    for (let randomCharacter = 0; randomCharacter <= num; randomCharacter++) {
        const randomCharacter = array[randomCharacter];


        console.log(inputLength);

    }

    passwordText.value = password;


}

writePassword()


console.log(allChars)

/**
 * generate a password based on certain criteria
 */
function generatePassword() {

    // Password is currently blank! We need to make a better one
    let password = "";





    return password;
}

// Main Process


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)