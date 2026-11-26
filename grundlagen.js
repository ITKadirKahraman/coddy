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