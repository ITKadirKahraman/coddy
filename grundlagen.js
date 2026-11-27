/* 
    AUFGABEN
    I am refresh to code with Coddy!
*/

// CHALLENGE

/* HELLO WORLD AUSGEBEN */
let string = ["Hello World!", "Goodbye World!"];
console.log(string[0]);

/*  
    VARIABELN DEKLARIEREN UND INITIALISIEREN 
    VARIABELN MIT OPERATOREN BEARBEITEN
*/

let numbers = [1, 2, 3, 4];
let c = 5;
let d = c + numbers[3];
let e = 0.14 + numbers[2];
let a1 = true; 
let a2 = false;
let a3 = a1 || a2;
console.log(a3);
console.log(d + " " + "und" + " " + e);

let coddy = ["I am refresh to code with Coddy!", "Hello, welcome to JavaScript!"];
console.log(coddy[0] + " " + coddy[1]);
let boolean = true;
let isLoggendIn = false;
console.log(`Der User ist Angemeldet: ${isLoggendIn}`);

const person = {
    id: {
        name: [
            {firstName: "John"},
            {lastName: "Doe"}
        ],
        gender: "men",
        age: 31,
        nationalty: "german",
        parents: {
            mother: {
                name: {firstName: "Hallo", lastName: "Doe"},
                gender: "women",
                age: 61,
                nationalty: "german",
            },
            father: {
                name: {firstName: "Hallo", lastName: "Doe"},
                gender: "men",
                age: 62,
                nationalty: "german",
            }
        }
    }
}

console.log(person.id.name[0]);
console.log(person.id.parents.mother.age * person.id.parents.father.age);

/*  
    IF
*/

const a = 17;
const b = 12;
let cc = 0;

if(a >= b && !(b > 20)) {
    cc = 2;
}

cc += 2;
console.log(cc);

const temperatur = 25;
let message = [];
if(temperatur > 30) {
    message.push("Too hot!");
}else if(temperatur < 10) {
    message.push("Too cold!");
}else if(temperatur >= 10 && temperatur <= 30) {
    message.push("Just right!")
}
console.log(message);

let wind = 63;
let condition = "unset";
if(wind < 8) {
    condition = "Calm";
} else if(wind >= 8 && wind <= 31) {
    condition = "Breeze";
} else if(wind >= 32 && wind <= 62) {
    condition = "Gale";
} else {
    condition = "Storm";
}
console.log(`condition: ${condition}`);

let rainfall = 33;
let rainCondition = "unset";
if(rainfall < 1) {
    rainCondition = "Dry";
}else if(rainfall >= 1 && rainfall <= 10) {
    rainCondition = "Light Rain";
}else if(rainfall >= 11 && rainfall <= 50) {
    rainCondition = "Moderate Rain";
}else if(rainfall > 50) {
    rainCondition = "Heavy Rain";
}
console.log(`rainCondition: ${rainCondition}`);

let n1 = 10;
let n2 = 12;
let op = "*";
let result = 0;
if(op === "+") {
    result = n1 + n2;
}else if(op === "-") {
    result = n1 - n2;
}else if(op === "*") {
    result = n1 * n2;
}else if(op === "/") {
    result = n1 / n2;
}
console.log(`result: ${result}`);

let agePool = 13;
let hasAdult = true;
let pool = "unset";

if(agePool < 10) {
    pool = "Sorry, you are too young";
}else if(agePool < 13) {
    if(!hasAdult) {
        pool = "Sorry, you need an adult with you"
    }else {
        pool = "You can enter with adult spuervision!"
    }
}else if (agePool >= 13) {
    pool = "You can enter by yourself!";
}

console.log(`And we result is: ${pool}`);

let system = "resume";
let messageSwitchCase = "unset";

switch (system) {
    case "start":
        messageSwitchCase = "System starting";
        break;
    case "stop":
        messageSwitchCase = "System stopping";
        break;
    case "pause":
        messageSwitchCase = "System paused";
        break;
    case "resume":
        messageSwitchCase = "System resuming";
        break;
    default:
        messageSwitchCase = "Unknowm command";
}

console.log(`Message: ${messageSwitchCase}`);

let billAmount = 1000;
let tipPercentage = 1.10;
let numPeople= 5;
let fullPrice = billAmount * tipPercentage;
let billPerson = fullPrice / numPeople;
console.log("Bill Split Calculator");
console.log(`Total (including tip): $${fullPrice}`);
console.log(`Each person pays: $${billPerson}`);

let n = 31;
for(i = 3; i <= n; i++){
    console.log(`Hello Coddy: ${i}`);
}

let seven = 7;
for(let i = 1; i <= 10; i++){
    console.log(7 * i);
}

let num = 3.5;
let whileResult = 4;
while(whileResult >= num){
    whileResult /= 2;
}
console.log(whileResult);

while(whileResult <= 100) {
    whileResult *= 2;
}
console.log(whileResult);