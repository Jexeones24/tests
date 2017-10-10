const shortAndModerateStyles = ['AMRAP', '3RFT', 'EMOM']
const longStyles = ['AMRAP', '5RFT', 'E3MOM']
const movementsArr = require('../movements.js');

console.log(movementsArr)

// needs to also accept number of elements to choose
function random(arr){
  return arr[Math.floor(Math.random() * arr.length)]
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
  let style;
  if(duration == 'short' || duration == 'moderate'){
    return style = random(shortAndModerateStyles);
  } else {
    return style = random(longStyles);
  }
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


function where(obj, property) {
  return obj[property]
}


function zip(arr1, arr2) {
  return arr1.map((el, idx) => {
    return el, arr2[idx];
  })
}


function display(workoutArray) {
  workoutArray.forEach(arr => console.log(arr.join(" ")))
}


module.exports = {
  duration,
  random,
  range,
  numberOfMovements,
  chooseStyle,
  where,
  zip,
  display
}
