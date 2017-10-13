const shortAndModerateStyles = ['AMRAP', '3RFT', 'EMOM']
const longStyles = ['AMRAP', '5RFT', 'E3MOM']
const data = require('../data.js');
const movements = data.movements;
const styles = data.styles;


// check for valid time domain

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


function chooseNumberOfMovements(name, duration) {
  let styleObj = styles.filter(s => s.name === name)[0]
  let durationArr = styleObj.durationRanges[duration]
  return random(durationArr, 1);
}


function chooseReps() {

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
  chooseNumberOfMovements,
  //chooseReps,
  zip
}
