const assert = require('assert')
const logic = require('../src/logic')
const data = require('../data.js');
const movements = data.movements;

// random
let array = ['squat', 'pullup', 'wallball', 'muscle-up']
let input = logic.random(array)
let length = array.length
assert(Array.isArray(input) === true)
assert(logic.random(array).length === length)


// array includes chosen items
let numsArray = ['dog', 'cat', 'rabbit', 'skunk']
let num = 2
expected = ['rabbit', 'skunk']
actual = logic.random(numsArray, num)
assert(actual, expected)


// range
let low = 0;
let high = 5;
expected = [0, 1, 2, 3, 4, 5]
actual = logic.range(low, high)
assert(arraysEqual(actual, expected))

function arraysEqual(arr1, arr2){
  if(arr1.length != arr2.length)
    return false;
  for(let i = arr1.length; i--;){
    if(arr1[i] !== arr2[i])
      return false;
  }
  return true;
}


// duration
let timeDomain = 10
expected = 'short'
actual = logic.duration(timeDomain)
assert(actual === expected)

timeDomain = 56
expected = 'long'
actual = logic.duration(timeDomain)
assert(actual === expected)



// chooseStyle
let shortAndModerateStyles = ['AMRAP', '3RFT', 'EMOM']
let longStyles = ['AMRAP', '5RFT', 'E3MOM']
let duration = 'long';
expected = true;
// seems sketchy - test fails if solved without making a nested array?
actual = longStyles.includes(logic.chooseStyle(duration)[0]);
assert(actual === expected)



//numberOfMovements
let style = 'AMRAP';
duration = 'long';
let durationArr = [5, 6]
expected = true;
actual = durationArr.includes(logic.chooseNumberOfMovements(style, duration)[0]);
assert(actual === expected)


// chooseMovements
let movementsArr = movements;
let numberOfMovements = 2;
let chosen = [
  {
    name: 'Pullup',
    type: 'Gymnastics',
    skill: 'high',
    secondsPerRep: 2,
    url: ''
  },
  {
    name: 'Wallball',
    type: 'Odd Object',
    skill: 'moderate',
    secondsPerRep: 3,
    url: ''
  },
  {
    name: 'Snatch',
    type: 'Olympic Weightlifting',
    skill: 'high',
    secondsPerRep: 4,
    url: ''
  }
]

// check for correct number chosen
expected = 3;
actual = chosen.length;
assert(expected === actual);

// check if subarray exists?
function isIncluded(chosenMovement, index, movementsArr) {
  return movementsArr.includes(chosenMovement);
}
expected = true;
actual = (logic.chooseMovements(3)).every(isIncluded)
assert(actual === expected);



// skillLevelFactor
  // calculates time per movement based on skill
let movement = {
  name: 'Muscle-up',
  type: 'Gymnastics',
  skill: 'high',
  secondsPerRep: 6,
  url: ''
}
let timePerMovement = 90;
expected = 60;
actual = logic.skillLevelFactor(movement, timePerMovement);
assert(actual === expected);



// calculateTimePerMovement
let things = [1, 2, 3]
input = logic.calculateTimePerMovement(10, things);
assert(Array.isArray(input) === true);
assert(logic.calculateTimePerMovement(10, things).length === things.length);

// check that all elements are numbers
function isNum(arr){
  let bools = arr.map(el => Number.isFinite(el))
  return bools.includes(false) ? false : true;
}
assert(isNum(logic.calculateTimePerMovement(10, chosen)) === true)

// check that uses skillLevelFactor - time per movement has been adjusted based on skill level
// calculateTimePerMovement() !== totalWorkTime/chosenMovements.length
  // how can I test this for each movement in array



// chooseRepsForEMOM
input = logic.chooseRepsForEMOM(10, things);
assert(Array.isArray(input) === true);
assert(logic.chooseRepsForEMOM(10, things).length === things.length);
// check that time doesn't exceed 45 seconds for one round of work



// chooseRepsForRounds
// check that rounds is a number
style = '5RFT';
input = logic.chooseRepsForRounds(10, style, things);
assert(Array.isArray(input) === true);
assert(logic.chooseRepsForRounds(10, style, things).length === things.length);
// total work time should not exceed timeDomain




// chooseRepsForAMRAP
input = logic.chooseRepsForAMRAP(things);
assert(Array.isArray(input) === true);
assert(logic.chooseRepsForAMRAP(things).length === things.length);



// repsSwitch




// zip
let arr1 = [21, 15, 9]
let arr2 = ['squat', 'pullup', 'box jump']
expected = [[21, 'squat'], [15, 'pullup'], [9, 'box jump']]
actual = logic.zip(arr1, arr2);
assert.deepEqual(actual, expected);
