// Getting Input from user
const height = parseFloat(prompt('Enter your height in centimeters:'));
const weight = parseFloat(prompt('Enter your weight in kilograms:'));

// Check if input is invalid
if (isNaN(height) || isNaN(weight)) {
  alert('Invalid input. Please enter valid numbers for height and weight.');
} else {
  var bmi = calculateBMI(height, weight);          // calculate BMI using calculateBMI function
  bmi = bmi.toFixed(2);                            // round of bmi to 2 decimals
  console.log("Your BMI is " + bmi);
}

function calculateBMI(height, weight) {
  var bmi = (weight * 10000 )/ (height * height);  // convert height to meter 
  return bmi;
}
