
module.exports = { ageValidation, heightValidation, weightValidation, computeBMI, BMImeaning };


function ageValidation(age){
  
    if (isNaN(age) || age < 0 || age > 150) {
      //console.log("Please enter your real age!") ;
      //rl.question('Please answer again?', (answer) => {
        //x=ageValidation(answer);
        //return;
      //}); 
      return false;
    } else {
      console.log("Thank you for honest answer");
      return true;
    }
  
  };
  
  function heightValidation(height){
  
      if (isNaN(height) || height < 10 || height > 300) {
        //console.log("Are you a giant or ?") ;
        //rl.question('Please answer again?', (answer1) => {
          //height=answer1;
          //h=heightValidation(height);
          //return;
        //});
        return false;
      } else {
        return true;
      }
  
  };
  function weightValidation(weight){
      if (isNaN(weight) || weight < 0 || weight > 700) {
        //console.log("Are you a giant or ?") ;
        //rl.question('Please answer again?', (answer2) => {
          //weight=answer2;
          //w=weightValidation(weight);
          //return;
        //});
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
      console.log("Your BMI:"+BMI)
      return BMI;
  }
  
  function BMImeaning(bmi){
    if (bmi<18.5){
      console.log("Underweight");
      return "Underweight";
    }  
  else   if (bmi>=18.5 && bmi<=25){
      console.log("Normal");
      return "Normal";
  }
  else   if (bmi>=25 && bmi<=30){
      console.log("Overweight");
      return "Overweight";
  }
  else if (bmi>30){
      console.log("Obesity");
      return "Obesity";
  };
  }