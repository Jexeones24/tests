const assert = require('assert')
const logic = require('../src/logic')

// random
// check for type array
let array = ['squat', 'pullup', 'wallball', 'muscle-up']
let input = logic.random(array)
assert(Array.isArray(input) === true)

// chosen.length === numberOfItemsToChoose
let expected = 2
let actual = ['squat', 'muscle-up'].length
assert(expected, actual)

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
actual = longStyles.includes(logic.chooseStyle(duration)[0]);
assert(actual === expected)



//numberOfMovements
let style = 'AMRAP';
duration = 'long';
let durationArr = [5, 6]
expected = true;
actual = durationArr.includes(logic.chooseNumberOfMovements(style, duration)[0]);
assert(actual === expected)


//chooseReps


// zip
let arr1 = [21, 15, 9]
let arr2 = ['squat', 'pullup', 'box jump']
expected = [[21, 'squat'], [15, 'pullup'], [9, 'box jump']]
actual = logic.zip(arr1, arr2);
assert.deepEqual(actual, expected);
