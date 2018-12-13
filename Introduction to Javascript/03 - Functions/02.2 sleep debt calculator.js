 //Use literal numbers and the + operator to rewrite getActualSleepHours()
 
 //Rewrite getIdealSleepHours() so that you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours per night. 
 
 //Update the call to getIdealSleepHours() in calculateSleepDebt() too.
 
 const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch(day) {
    case 'monday': return 8; break;
		case 'tuesday': return 6; break;
    case 'wednesday': return 5; break;
  	case 'thursday': return 7; break;
    case 'friday': return 8; break;
    case 'saturday': return 3; break;
    case 'sunday': return 5; break;
    default: return 'Error: invalid input'; break;
  } 
}

//console.log(getSleepHours('sunday'));

/*getActualSleepHours uses implicit return (i.e. no curly braces around the arrow function block)*/
const getActualSleepHours = () => 8 + 6 + 5 + 7 + 8 + 3 + 5;
  /*sums the number of hours the function getSleepHours returns for each day of the week*/

const getIdealSleepHours = (idealHours) => idealHours * 7;

//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if(actualSleepHours === idealSleepHours) {
    console.log('You get the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You get ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than necessary!');
  } else {
    console.log('You don\'t get enough sleep. You need to rest ' + (idealSleepHours - actualSleepHours) + ' hours more');
  }
}

calculateSleepDebt();
