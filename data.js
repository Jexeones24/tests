const movements = [
  {
    name: 'Squat',
    type: 'Weightlifting',
    secondsPerRep: 3,
    url: ''
  },
  {
    name: 'Pullup',
    type: 'Gymnastics',
    secondsPerRep: 2,
    url: ''
  },
  {
    name: 'Wallball',
    type: 'Odd Object',
    secondsPerRep: 4,
    url: ''
  },
  {
    name: 'Snatch',
    type: 'Olympic Weightlifting',
    secondsPerRep: 4,
    url: ''
  },
  {
    name: 'Muscle-up',
    type: 'Gymnastics',
    secondsPerRep: 6,
    url: ''
  },
  {
    name: 'Box Jump',
    type: 'Plyometrics',
    secondsPerRep: 3,
    url: ''
  }
]

const AMRAP = {
  short: {
    low: 5,
    high: 6
  },
  moderate: {
    low: 5,
    high: 6
  },
  long: {
    low: 5,
    high: 6
  }
}


module.exports = {
  movements,
  AMRAP
}
