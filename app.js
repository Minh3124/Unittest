const readline = require('readline');
const BMI = require("./BMI")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question('Welcome to BMI calculator. How old are you?(0-150)', (answer) => {
  var x=ageValidation(answer),w,h;
  var weight,height;
  if (x==true){
    rl.question('How tall are you?', (answer1) => {
      height=answer1;
      h=heightValidation(height);
      if (h==true){
        rl.question('How about your weight?', (answer2) => {
          weight=answer2;
          w= weightValidation(weight);
          if(w==true){
            bmi=computeBMI(height,weight);
            BMImeaning(bmi);
          }else return false;   
        }); 
      }else return false;
      
    });
  } else return false;
});  


