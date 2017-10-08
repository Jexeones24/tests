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

// is this the best way to structure workout object?
// where should I put reps?

## NAME
// best random name generator??

## STYLE

const styles = [ 'AMRAP', '3RFT', '5RFT', 'EMOM', 'E3MOM' ]
const timeDomain = num

// define a range() function to find range
const range;
if(timeDomain is between (6..15))
  return range = 'short';
else if(timeDomain is between(16..25))
  return 'moderate';
else (26..50)
  return 'long';


// define chooseRandomly() function
const a = chooseRandomly('AMRAP' || '3RFT' || 'EMOM')
const b = chooseRandomly('AMRAP' || '5RFT' || 'E3MOM')

const style;
if(range == 'short' || range == 'moderate')
  return style = a;
else
  return style = b;


## NUMBER OF MOVEMENTS

const timeDomain = timeDomain;
// define range function to determine range
const range = timeDomain.range()
const style = style;

// define range() function for timeDomain
const numberOfMovements;

if(style == 'AMRAP' && timeDomain.range(6-12))
  then numberOfMovements = 2-3
else if(style == 'AMRAP' && timeDomain.range(13-20))
  then numberOfMovements = 3-4
else if(style == 'AMRAP' && timeDomain.range(21-30))
  then numberOfMovements = 4-5
else if(style == 'AMRAP' && timeDomain.range(31-50))
  then numberOfMovements = 5-6

else if(style == '3RFT' && timeDomain.range(6-12))
  then numberOfMovements = 2-3
else if(style == '3RFT' && timeDomain.range(13-25))
  then numberOfMovements = 3-4

else if(style == '5RFT')
  then numberOfMovements = chooseRandomly(3-5)

else if(style == 'EMOM')
  then numberOfMovements = chooseRandomly(2-3)
else
  then numberOfMovements = chooseRandomly(3-4)

const numberOfMovements = numberOfMovements;

## MOVEMENTS

const movements = [ {}, {}, {}, ... ]
// use chooseRandomly()

## REPS

const reps = []
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


if
numberOfMovements = 2 && style = 'AMRAP'
  reps =
numberOfMovements = 2 && style = '3RFT'

numberOfMovements = 2 && style = 'EMOM'

numberOfMovements = 3 && style =
numberOfMovements = 3 && style =
numberOfMovements = 3 && style =
numberOfMovements = 3 && style =
numberOfMovements = 3 && style =

numberOfMovements = 4 &&
numberOfMovements = 5 &&
numberOfMovements = 6 &&

// use zip() to construct workout??
