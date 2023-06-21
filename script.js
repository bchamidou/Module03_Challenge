// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Function to generate a random password
function generatePassword() {

  // Add your password generation logic here

   var length = Number(prompt("How many characters would you like your password to be?"));
   while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
 
   // This can include generating a password based on user-selected criteria,
  
   var uppers = confirm("Would you like to use uppercase letters?");
   var lowers = confirm("Would you like to use lowercase letters?");
   var numbers = confirm("Would you like to use numbers?");
   var symbols = confirm("Would you like to use special characters?");
   
   while (!uppers && !lowers && !numbers && !symbols) {
     alert("You must select at least one character type!");
     uppers = confirm("Would you like to use uppercase letters?");
     lowers = confirm("Would you like to use lowercase letters?");
     numbers = confirm("Would you like to use numbers?");
     symbols = confirm("Would you like to use special characters?");
   }

  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]=<>/,."';
  let pass = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    pass += characters.charAt(randomIndex);
  }
  return pass;
   
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


