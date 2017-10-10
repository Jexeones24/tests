const assert = require('assert')
const logic = require('../src/logic')

// random
let array = [1, 2, 3, 4, 5, 6, 7, 8]
let chosen = 3
expected = array.includes(chosen)
actual = logic.random(array)


// duration


// range
let low = 0;
let high = 5;
expected = [0, 1, 2, 3, 4, 5]
actual = logic.range(low, high)

low = 30;
high = 36;
expected = [30, 31, 32, 33, 34, 35, 36]
actual = logic.range(low, high)


// where
let object = {
  name: 'Squat',
  type: 'Powerlifting',
  secondsPerRep: 4,
  url: ''
}
let property = 'name'
expected = 'Squat'
actual = logic.where(object[property])


// zip
let arr1 = [21, 15, 9]
let arr2 = ['squat', 'pullup', 'box jump']
expected = [[21, 'squat'], [15, 'pullup'], [9, 'box jump']]
actual = logic.zip(arr1, arr2)


// display
let workoutArray = [[21, 'squat'], [15, 'pullup'], [9, 'box jump']]
expected = "21 squat", "15 pullup", "9 box jump"
actual = logic.display(workoutArray)
