// Array Function
/* const animeName = ["Naruto","Dragonball","One Piece"];
for(let i = 0; i < animeName.length; i++){
    console.log(animeName[i]);
} */

//Array Method (Functions)
const animeName = ["Naruto", "Dragonball", "One Piece"];
//Push() add to end
//Pop()
//toString :convert to string
//concat :add next variable
//unShift :add variable to start
//shift :remove form start
//slice :return the piece of array
animeName.push("Demon Slayer");
console.log(animeName);
animeName.unshift("Jujustu Kaisen");
console.log(typeof animeName.toString());
console.log(animeName.length);
console.log(animeName.slice(0, 2));