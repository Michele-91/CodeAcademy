
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
const getActualSleepHours = () =>
  /*sums the number of hours the function getSleepHours returns for each day of the week*/
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 8;
  /*ideal sleep hours per week*/
  return idealHours * 7;
}

//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours) {
    console.log('You get the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You get ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than necessary!');
  } else {
    console.log('You don\'t get enough sleep. You need to rest ' + (idealSleepHours - actualSleepHours) + ' hours more');
  }
}

calculateSleepDebt();


