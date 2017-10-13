const shortAndModerateStyles = ['AMRAP', '3RFT', 'EMOM']
const longStyles = ['AMRAP', '5RFT', 'E3MOM']
const movementsArr = require('../data.js');


// check for valid time domain
// needs to also accept number of elements to choose

function random(arr, numOfItems){
  if(Array.isArray(arr) === false){
    return 'not an array'
  }
  arr.sort(el => 0.5 - Math.random());
  return arr.slice(0, numOfItems);
}


function range(low, high) {
  let rangeArr = [];
  for(let i = low; i <= high; i++){
    rangeArr.push(i)
  }
  return rangeArr;
}


function duration(timeDomain){
  if(range(6, 15).includes(timeDomain)){
    return 'short'
  } else if(range(16, 25).includes(timeDomain)){
    return 'moderate'
  } else {
    return 'long'
  }
}

function chooseStyle(duration) {
  if(duration === 'short' || duration === 'moderate'){
    return random(shortAndModerateStyles, 1);
  } else {
    return random(longStyles, 1);
  }
}

// put these in movements file and import at top??
function showAMRAP(){
  return movementsArr.AMRAP;
}

function numberOfMovements(style, duration){
  let num;
  switch(style, duration){
    case 'AMRAP' && 'short':
      num = random(range(2, 3));
      break;
    case 'AMRAP' && 'moderate':
      num = random(range(3, 4));
      break;
    case 'AMRAP' && 'long':
      num = random(range(5, 6));
      break;
    case 'EMOM':
      num = random(range(1,2));
      break;
    case '3RFT' && 'short':
      num = random(range(2, 3));
      break;
    case '3RFT' && 'moderate':
      num = 3;
      break;
    case '5RFT' && 'long':
      num = random(range(4, 5));
      break;
    case 'E3MOM' && 'long':
      num = random(range(2, 3));
      break;
    default:
      num = 'invalid';
  }
  return num;
}

function zip(arr1, arr2) {
  let zipped = [];
  arr1.map((el, idx) => {
    let newArr = [];
    newArr.push(el, arr2[idx]);
    zipped.push(newArr);
  });
  return zipped;
}


module.exports = {
  duration,
  random,
  range,
  chooseStyle,
  showAMRAP,
  // numberOfMovements,
  //reps,
  zip
}
