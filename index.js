function wakeDog(dog , breed){
    return (`Wake ${dog} the ${breed}`);
}

function leashDog(dog , breed){
    return (`Leash ${dog} the ${breed}`);
}

function walkToPark(dog , breed){
    return (`Walk to the park with ${dog} the ${breed}`);
}

function throwFrisbee(dog , breed){
    return (`Throw the frisbee for ${dog} the ${breed}`);
}

function walkHome(dog , breed){
    return (`Walk home with ${dog} the ${breed}`);
}

function unleashDog(dog , breed){
    return (`Unleash ${dog} the ${breed}`);
}

const routine = [
    wakeDog , leashDog , walkToPark , throwFrisbee , walkHome , unleashDog
]

function exerciseDog(dog , breed){
    let result = []
    for(let i = 0; i < routine.length; i++){
        const temp = routine[i](dog , breed)
        console.log(temp)
        result[i] = temp
    }
    return result
}