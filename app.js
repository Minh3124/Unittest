const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = { ageValidation, heightValidation, weightValidation, computeBMI, BMImeaning };


rl.question('Welcome to BMI calculator. How old are you?(0-150)', (answer) => {
  var x=ageValidation(answer)
  var weight,height
  while(x==false){
    rl.question('How old are you', (answer) => {
        x= answer
    }); 
  }
  if (x==true){
    heightValidation(height);
    weightValidation(weight);
    computeBMI(height,weight);
  }


}); 

function ageValidation(age){
  
  if (isNaN(age) || age < 0 || age > 150) {
    console.log("Please enter your real age!") ;
    return false;
  } else {
    console.log("Thank you for honest answer");
    return true;
  }

};

function heightValidation(height){
  rl.question('How tall are you?', (answer) => {
  height=answer
  }); 
    if (isNaN(height) || height < 10 || height > 300) {
      console.log("Are you a giant or ?") ;
      return false;
    } else {
      return true;
    }

};
function weightValidation(weight){
  rl.question('How about your weight?', (answer) => {
    weight=answer
    }); 
    if (isNaN(weight) || weight < 0 || weight > 700) {
      console.log("Are you a giant or ?") ;
      return false;
    } else {
      return true;
    }
};

function computeBMI(height, weight)
{   var BMI;
    height=height/100;
    BMI=weight/Math.pow(height,2);
    BMI = Math.round( BMI * 10 ) / 10;
    return BMI;
}

function BMImeaning(bmi){
  if (bmi<18.5){
    console.log("Underweight");
  }  
else   if (bmi>=18.5 && output<=25){
    console.log("Normal");
}
else   if (bmi>=25 && output<=30){
    console.log("Overweight");

}
else   if (bmi>30){
    console.log("Obesity");
}
}