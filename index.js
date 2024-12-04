const wakeDog = function(dogName, dogBreed) {
  let statement = "Wake "+dogName+" the "+dogBreed;
  console.log(statement);
  return statement;
}

const leashDog = function(dogName, dogBreed) {
  let statement = "Leash "+dogName+" the "+dogBreed;
  console.log(statement);
  return statement;
}

const walkToPark = function(dogName, dogBreed) {
  let statement = "Walk to the park with "+dogName+" the "+dogBreed;
  console.log(statement);
  return statement;
}

const throwFrisbee = function(dogName, dogBreed) {
  let statement = "Throw the frisbee for "+dogName+" the "+dogBreed;
  console.log(statement);
  return statement;
}

const walkHome = function(dogName, dogBreed) {
  let statement = "Walk home with "+dogName+" the "+dogBreed;
  console.log(statement);
  return statement;
}

const unleashDog = function(dogName, dogBreed) {
  let statement = "Unleash "+dogName+" the "+dogBreed;
  console.log(statement);
  return statement;
}
let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, dogBreed) {
  let arr = []
  for (let i = 0; i < routine.length; i++) {
    arr.unshift(routine[i](dogName, dogBreed));
  }
  return arr
}
