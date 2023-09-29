
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbersArr = ['1','2','3','4','5','6','7','8','9','0'];
let specialArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];



//
function generatePassword() {
  var arrLength = prompt("How many characters long would you like your password to be? (Please pick a number between 8-128)");
  var tempPW = [];
  var userPW = [];
  if(arrLength>=8 && arrLength<=128)
  {
    
    if(confirm("uppercase?")){
      tempPW=tempPW.concat(upperCase);
      console.log(tempPW);
    }

    if(confirm("lower?")){
      tempPW=tempPW.concat(lowerCase);
      console.log(tempPW);
    }

    if(confirm("numbers?")){
      tempPW=tempPW.concat(numbersArr);
      console.log(tempPW);
    }

    if(confirm("special?")){
      tempPW=tempPW.concat(specialArr);
      console.log(tempPW);
    }
    
    console.log(tempPW);
    
    for (let index = 0; index < arrLength; index++) {
    
      rndPick = tempPW[Math.floor(Math.random() * tempPW.length)];
      userPW.push(rndPick);      
    }
  userPW=userPW.join('');
  console.log(userPW);
  return userPW;
    
  }
  else{ 
    alert("Incorrect input. Please Pick a number between 8-128");
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
