const wakeDog = (a, b) => `Wake ${a} the ${b}`

const leashDog = (a, b) => `Leash ${a} the ${b}`

const walkToPark = (a, b) => `Walk to the park with ${a} the ${b}`

const throwFrisbee = (a, b) => `Throw the frisbee for ${a} the ${b}`

const walkHome = (a, b) => `Walk home with ${a} the ${b}`

const unleashDog = (a, b) => `Unleash ${a} the ${b}`

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

const exerciseDog = (dogName, dogBreed) => {
  return routine.map(x => x(dogName,dogBreed));
}
