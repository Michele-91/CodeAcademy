let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const runnerAge = 20;
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}
if(runnerAge > 18 && registeredEarly) {
  console.log(`Your race number is: ${raceNumber}. Early adults will run at 9:30 am`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Your race number is: ${raceNumber}. Late adults will run at 11:30 am`);
} else if (runnerAge < 18) {
  console.log(`Your race number is: ${raceNumber}. Youth registrants run at 12:30 pm (regardless of registration)`);
} else {
  console.log(`Your race number is: ${raceNumber}. Please contact the registration desk`);
}

