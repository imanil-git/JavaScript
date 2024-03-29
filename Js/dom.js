//DOM
//Document Object Model

/*function add(a, b){
    let c = parseInt(a) + parseInt(b);
    console.log(c);
    document.getElementById("result").innerHTML = c;
}

const a = prompt("Enter value of a:");
const b = prompt("Enter value of b:");

add (a, b); */

/*function multipleOf(number) {
  let i, result;
  let resultElement = document.getElementById("result");
//   resultElement.innerHTML = "";  //Clearing previous content
  for (i = 1; i <= 10; i++) {
    result = number * i;
    console.log(`${number} X ${i} = ${result}`);
    resultElement.innerHTML += `${number} X ${i} = ${result} <br />`;
  }
}

const num = parseInt(prompt("Enter a number:"));
multipleOf(num); */

// function sayHello(){
//     document.getElementById("result").innerHTML = "Hello World";
// }

function add() {
  const ans = confirm("Do you want answer?");
//   console.log(ans);
  if (ans == true) {
    const a = document.getElementById("fn").value;
    const b = document.getElementById("sn").value;
    const c = parseInt(a) + parseInt(b);
    // console.log(c);  //It is only checking for value remove after successful in website
    document.getElementById("result").value = c;
  }
  else{
    alert("Sorry");
  }
}
