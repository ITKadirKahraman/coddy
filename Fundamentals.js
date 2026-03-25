/*
****** Build a strong foundation with essential concepts and basic skills
*/


// Type your code below
let k = 88;
let PI = 3.14;
let name = "bob";

// Don't change the line below
console.log(`k = ${k}`)
console.log(`PI = ${PI}`)
console.log(`name = ${name}`)

// Type your code below
const minSize = 50;

// Don't change the line below
console.log(`minSize = ${minSize}`)

// Type your code below
const maxSpeed = 120;

// Don't change the line below
console.log(`maxSpeed = ${maxSpeed}`)

// Type your code below
let a = 5.2;
let b = 2.6;
let c = a / b;

// Don't change the line below
console.log(`a = ${a}, b = ${b}, c = ${c}`);

// Type your code below
let x = 12;
let y = 3;
let z = x * y;

// Don't change the line below
console.log(`x = ${x}, y = ${y}, z = ${z}`);

// Type your code below
let a = 9;
let b = 2.6;
let c = 11;
let d = a % 2;
let e = a % 3;
let f = c % 10;

// Don't change the line below
console.log(`a = ${a}`)
console.log(`b = ${b}`)
console.log(`c = ${c}`)
console.log(`d = ${d}`)
console.log(`e = ${e}`)
console.log(`f = ${f}`)

// Type your code below
let x = 15;
let y = 4;
let z = x % y;

// Don't change the line below
console.log(`x = ${x}, y = ${y}, z = ${z}`)

// Type your code below
let count = 0
count = 4;
count *= 2;
count -= 1;

// Don't change the line below
console.log(`count = ${count}`)

// Type your code below
let balance = 0
balance += 100;
balance *= 1.10;
balance -= 50;

// Don't change the line below
console.log(`balance = ${Math.floor(balance)}`)

// Type your code below
let n1 = 8;
let n2 = 9;
let n3 = n1 > n2;

// Don't change the line below
console.log(`n1 = ${n1}, n2 = ${n2}, n3 = ${n3}`)



// Type your code below
let age = 18;
let canVote = true;

// Don't change the line below
console.log(`age = ${age}, canVote = ${canVote}`)

// Given variables
let a = 10
let b = "10"
let c = true

// Type your code below
let d = a == b;
let e = a == c;
let f = b != c;
let g = a == b;

// Don't change the line below
console.log(`d = ${d}`)
console.log(`e = ${e}`)
console.log(`f = ${f}`)
console.log(`g = ${g}`)

// Type your code below
let a = 6;
let b = 4;
// Don't change the line below
let c = b * a
console.log(`c = ${c}`)

// Type your code below
let b1 = true;
let b2 = false;
let b3 = b1 || b2

// Don't change the line below
console.log(`b3 = ${b3}`)

// Type your code below
let b1 = true;
let b2 = true;
let b3 = true;

// Don't change below
let b4 = b1 && b2 && b3
console.log(`b4 = ${b4}`)

// Type your code below
let b1 = 3;
let b2 = 3;
let b3 = !((b1 + b2) > (b1 * b2))

// Don't change the line below
console.log(`b3 = ${b3}`)

// Type your code below
let x = 1;
let y = -1;
let z = ((x * y) < (x + y) && (x + y) < (x - y))

// Don't change the line below
console.log(`z = ${z}`)

// Logical Operators Part 3
let b1 = true;
let b2 = true;
let b3 = false;

// Don't change the line below
let b4 = b1 && b2 && (!b3)
console.log(`b4 = ${b4}`)

// Initialize variables
let has_license = true;
let has_space = false;
let has_experience = true;

// Calculate conditions
let can_sell_regular_pet = (has_license || has_experience) && has_space;
let can_sell_exotic_pet = (has_license && has_experience) && has_space;
let cannot_sell_any_pet = !(has_license && has_experience) || !has_space;

// Don't delete the lines below
console.log("Can sell regular pet:", can_sell_regular_pet)
console.log("Can sell exotic pet:", can_sell_exotic_pet)
console.log("Cannot sell any pet:", cannot_sell_any_pet)

// Initialize variables
let has_license = true;
let has_insurance = false;
let has_experience = true;

// Calculate conditions
let can_drive_car = (has_license && has_insurance) || (has_license && has_experience);
let can_drive_motorcycle = has_license && has_insurance && has_experience;
let cannot_drive_any = !has_license || (has_insurance && has_experience);

// Don't delete the lines below
console.log("Can drive car:", can_drive_car)
console.log("Can drive motorcycle:", can_drive_motorcycle)
console.log("Cannot drive any:", cannot_drive_any)

// Given variables
let num = 42
let bool = false
let str = "7"

// Type your code below
let a = String(num);
let b = Number(bool);
let c = Number(str);
let d = num + str;

// Don't change the line below
console.log(`a = ${a}`)
console.log(`b = ${b}`)
console.log(`c = ${c}`)
console.log(`d = ${d}`)

let a = 15;
let b = 11;

// Don't change below this line
let c = 0;
if (a >= b && !(b < 10)) {
    c = 2;
}

c += 1;
console.log(`c = ${c}`);

let temperature = 25;
let message = ""; // Set the message based on temperature

// Add your if statements below
if(temperature > 30){
    message = "Too cold!";
}else if(temperature > 10 && temperature < 30){
    message = "Just right!";
}

console.log(message); // This will show the result

let wind = parseInt(inp); // Don't change this line
let condition = "unset";
// Type your code below
if(wind < 8){
    condition = "Calm";
}else if(wind >= 8 && wind <= 31){
    condition = "Breeze";
}else if(wind >= 32 && wind <= 63){
    condition = "Gale";
}else {
    condition = "Storm";
}

// Don't change the line below
console.log(`condition = ${condition}`);

let rainfall = parseInt(inp); // Don't change this line
let rainCondition = "unset";
// Type your code below
if(rainfall < 1){
    rainCondition = "Dry";
}else if(rainfall >= 1 && rainfall <= 10){
    rainCondition = "Light Rain";
}else if(rainfall >= 11 && rainfall <= 50) {
    rainCondition = "Moderate Rain";
}else if(rainfall > 50){
    rainCondition = "Heavy Rain";
}


// Don't change the line below
console.log(rainCondition);

let n1 = parseInt(inp[0]) // Don't change this line
let n2 = parseInt(inp[1]) // Don't change this line
let op = inp[2] // Don't change this line
let result = 0

if(op == '+'){
    result = n1 + n2;
}else if(op == '-'){
    result = n1 - n2;
}else if(op == '/'){
    result = n1 / n2;
}else if(op == '*'){
    result = n1 * n2;
}

// Don't change the line below
console.log(`result = ${result}`)

// Was gibt dieser Code aus?
let score = 85;
let passed;
if (score >= 60) {
    if (score >= 90) {
        passed = "Excellent";
    } else {
        passed = "Good";
    }
} else {
    passed = "Failed";
}
console.log(passed);

let age = parseInt(inp[0]); // Don't change this line
let has_adult = inp[1] === "true"; // Don't change this line

// Write your code below
if(age < 10){
    console.log("Sorry, you are too young");
}else if(age < 13 && !has_adult){
    console.log("Sorry, you need an adult with you");
}else if(age < 13 && has_adult){
    console.log("You can enter with adult supervision!");
}else if(age >= 13){
    console.log("You can enter by yourself!");
}

// Vervollständigen Sie die Switch-Anweisung, um die Farbe zu behandeln.
let color = "red";
let message;
 
switch (color) {
    case "red":
        message = "Stop";
        break;
    default:
        message = "Unknown";
}

// Get the command from the user
let command = inp;

// Create a variable to store the message
let message;

switch (command) {
    // Write your code here
    case 'start':
        message = "System starting";
        break;
    case 'stop':
        message = "System stopping";
        break;
    case 'pause':
        message = "System paused";
        break;
    case 'resume':
        message = "System resuming";
        break;
    case 'nothing':
        message = "Unknown command"
}

// Print the message
console.log(message);

// Type your code below
console.log("Welcome to Coddy!");
console.log("JavaScript is fun.");

// Write code here
let name = "Alice";
let age = 30;
console.log(name);
console.log(age);
console.log(10 + " " + 20);

/*
Du erhältst einen Code, der einen zufälligen String als Eingabe in eine Variable namens rnd speichert.

Gib in die Konsole "The input is: " und den zufälligen String aus, der in der Variable rnd ist.
*/

let rnd = inp; // Don't change this line
console.log(`The input is: ${rnd}`);

/*
Dir wird ein Code gegeben, der eine Zufallszahl als Eingabe in eine Variable namens rnd speichert.

Gib "The input is: " gefolgt vom Wert von rnd aus.
Gib aus:
"The number is even.", wenn rnd gerade ist.
"The number is odd.", wenn rnd ungerade ist.
*/

let rnd = inp; // Don't change this line
if(rnd % 2 == 0){
    console.log(`The input is: ${rnd}`);
    console.log('The number is even.');
}else if(rnd % 2 == 1){
    console.log(`The input is: ${rnd}`);
    console.log("The number is odd.")
}

/*
Gegeben zwei Strings var1 und var2.

Wandle sie zu einem float um und drucke das Produkt der beiden aus.
*/

let var1 = inp[0] // Don't change this line
let var2 = inp[1] // Don't change this line

// Write code below
let a = parseFloat(var1);
let b = parseFloat(var2);
let c = a * b;
console.log(c);


let length = inp[0] // Don't change this line
let width = inp[1] // Don't change this line

// Write code below
let len = parseFloat(length);
let wid = parseFloat(width);
let area = len * wid;
let perimeter = 2 * (len + wid);
console.log(`The area is: ${area} and the perimeter is: ${perimeter}`);

// Values to convert
const stringValue = '42';
const zeroNumber = 0;
const positiveNumber = 7;
const emptyString = '';
const boolValue = true;
const numValue = 123;

// TODO: Replace null with the correct Boolean() conversion of stringValue
console.log("Boolean('42'): ", Boolean(stringValue));

// TODO: Replace null with the correct Boolean() conversion of zeroNumber
console.log("Boolean(0): ", Boolean(zeroNumber));

// TODO: Replace null with the correct Boolean() conversion of positiveNumber
console.log("Boolean(7): ", Boolean(positiveNumber));

// TODO: Replace null with the correct Boolean() conversion of emptyString
console.log("Boolean(''): ", Boolean(emptyString));

// TODO: Replace null with the correct String() conversion of boolValue
console.log("String(true): ", String(boolValue));

// TODO: Replace null with the correct String() conversion of numValue
console.log("String(123): ", String(numValue));

let age = parseInt(inp); // Don't change this line
// Type your code below
if(age < 120){
    let value = 120 - age;
    console.log(`${value} years till 120`);
}else if (age == 120){
    console.log(`Zero years till 120`);
}

let num = parseInt(inp); // Don't change this line
// Type your code below
if(num == 1){
    console.log("T");
}else if(num == 0){
    console.log("F");
}

let billAmount = parseFloat(inp[0]); // Don't change this line
let tipPercentage = parseFloat(inp[1]); // Don't change this line
let numPeople = parseInt(inp[2]); // Don't change this line

// Type your code below
console.log("Bill Split Calculator");
let tipAmount = (tipPercentage / 100) * billAmount;
let total = billAmount + tipAmount;
console.log(total);

let billAmount = parseFloat(inp[0]); // Don't change this line
let tipPercentage = parseFloat(inp[1]); // Don't change this line
let numPeople = parseInt(inp[2]); // Don't change this line

// Type your code below
console.log("Bill Split Calculator");
let tipAmount = (tipPercentage / 100) * billAmount;
let total = billAmount + tipAmount;
console.log(total);
let perPerson = total / numPeople;
console.log(perPerson);

let billAmount = parseFloat(inp[0]); // Don't change this line
let tipPercentage = parseFloat(inp[1]); // Don't change this line
let numPeople = parseInt(inp[2]); // Don't change this line

// Type your code below
console.log("Bill Split Calculator");
let tipAmount = (tipPercentage / 100) * billAmount;
let total = billAmount + tipAmount;
console.log(`Total (including tip): ${"$" + total}`);
let perPerson = total / numPeople;
console.log(`Each person pays: ${"$" + perPerson}`);
