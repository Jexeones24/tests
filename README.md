Practice on writing unit tests with the logic needed to randomly generate a CrossFit workout for a project idea.

## WORKOUT

workout = {
  name: '',
  style: '',
  numberOfMovements: 0,
  movements: [
    {
      name: '',
      type: '',
      secondsPerRep: 0,
      url: ''
    }
  ],
  reps: []
}


## NAME
// use random name generator like Faker?

## STYLE
// based on duration (short, moderate, long), choose random style

## NUMBER OF MOVEMENTS
// based on style and duration of workout (workouts of same style may have different duration)

## MOVEMENTS
// choose movements from json-like file that i've made
const movements = [ {}, {}, {}, ... ]
let chosenMovements = random(movements, numberOfMovements)

## REPS
// creates reps array

// use zip() to construct workout??
