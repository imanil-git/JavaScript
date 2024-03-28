//Function Js

//Function Defination
/*function sayHello(){
    //Statement
    console.log("Hello");
}
sayHello(); */

//Parameter Function
/*function tellHello(name) { //name is parameter
    console.log(`Hello ${name}`);
}

//Function Call
const firstName = prompt("Enter your name");
tellHello(firstName);

function add(a, b){
    const c = a + b;
    console.log(`Sum is ${c}`);
}

a = parseInt(prompt("Enter value of a:"));
b = parseInt(prompt("Enter value of b:"));
add(a, b); */

//Arrow Function
/* const add = (a, b) => {
    const c = parseInt(a) - parseInt(b);
    console.log(`Difference is ${c}`);
}

a = (prompt("Enter value of a:"));
b = (prompt("Enter value of b:"));
add(a, b); */

const bag = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bag.forEach((item) =>{
    if(item % 2 == 1){
        console.log(item);
    }
}); 

const bag_2 = bag.filter((item) =>{
    return item % 2 == 0;
});

console.log(bag_2);