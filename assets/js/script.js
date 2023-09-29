
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbersArr = ['1','2','3','4','5','6','7','8','9','0'];
let specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];


//the function to create a password
function generatePassword() {
  var arrLength = prompt("How many characters long would you like your password to be? (Please pick a number between 8-128)");
  var tempPW = [];
  var userPW = [];
  //Checking to see if number value is valid
  if(arrLength>=8 && arrLength<=128)
  {
    //Check to see if they want Uppercase letters
    if(confirm("Would you like to add uppercase letters to your password?")){
      tempPW=tempPW.concat(upperCase);
      console.log(tempPW);
    }

    //Check to see if they want Lowercase letters
    if(confirm("Would you like to add lower letters to your password?")){
      tempPW=tempPW.concat(lowerCase);
      console.log(tempPW);
    }

    //Check to see if they want Numbers
    if(confirm("Would you like to add numbers to your password?")){
      tempPW=tempPW.concat(numbersArr);
      console.log(tempPW);
    }

    //Check to see if they want Special
    if(confirm("Would you like to add special character to your password?")){
      tempPW=tempPW.concat(specialArr);
      console.log(tempPW);
    }
    
    if(tempPW.length===0){
    alert("No characters have been selected. Please click Generate Password to try again.");
      return"";
    }

    console.log(tempPW);

    //for loop to pick a random character 
    for (let index = 0; index < arrLength; index++) {
    
      rndPick = tempPW[Math.floor(Math.random() * tempPW.length)];
      userPW.push(rndPick);      
    }
  userPW=userPW.join('');
  console.log(userPW);
  return userPW;
    
  }
  //spiting out invalid inputs
  else{ 
    alert("Incorrect input. Please Pick a number between 8-128. Please click Generate Password to try again");
    return"";
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
