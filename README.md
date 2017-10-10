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
// each element corresponds to respective movement in chosenMovements array

const totalWorkTime = (timeDomain * 60) * .75
const timePerMovement = totalWorkTime/numberOfMovements
const reps = timePerMovement/movement.secondsPerRep

// define a where() function to get seconds property from movement object???
// define rep generator that checks secondsPerRep property on movement
// based on numberOfMovements and style

const getReps = () => {
  // takes a movement and assigns reps
}

// let repsArray = movements.map( m => m.getReps(); )



// use zip() to construct workout??
