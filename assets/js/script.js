let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z"]
let numbersArr = ['1','2','3','4','5','6','7','8','9','0']
let specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
let userPW =[]

function generatePassword() {
  var length= prompt("How many characters long would you like your password to be? (Please pick a number between 8-128)");
  if(length>8||length<128)
  {
    if (confirm("Thank you, Would you like")){
      userPW.concat(upperCase);
    }
    if (confirm("Thank you, Would you like")){
      userPW.concat(lowerCase);
    }
    if (confirm("Thank you, Would you like")){
      userPW.concat(numbersArr);
    }
    if (confirm("Thank you, Would you like")){
      userPW.concat(specialArr);
    }
    
  }
  else{ 
    alert("Incorrect input. Please Pick a number between 8-128");
  } 
  
}





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
