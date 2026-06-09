// Gewitter bestimmen
function rain(rain) {
    let rainfall = parseInt(rain);
    let rainCondition = "unset";

    if(rainfall < 1) {
        rainCondition = "Dry";
    }else if(rainfall >= 1 && rainfall <= 10) {
        rainCondition = "Light Rain"
    }else if(rainfall >= 11 && rainfall <= 50) {
        rainCondition = "Moderate Rain"
    }else {
        rainCondition = "Heavy Rain";
    }

    return rainCondition;
}

console.log(rain(50));

// Einfacher Taschenrechner
function calculator(num1, num2, op) {
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    let operator = op;
    let result = 0;

    if(operator === "+") {
        result = number1 + number2;
    }else if(operator === "-") {
        result = number1 - number2;
    }else if(operator === "/") {
        result = number1 / number2;
    }else if(operator === "*") {
        result = number1 * number2;
    }else if(operator === "%") {
        result = number1 % number2;
    }
    
    return result;
}

console.log(calculator(52, 31, "*"));

// mindestalter bestimmen für Eintritt
function ageForEntry(age, parents) {
    let personAges = parseInt(age);
    let parentBoolean = parents;
    let message = "";

    if(personAges < 10) {
        message = "Sorry, you are to young"
    }else if(personAges < 13 && parentBoolean === false) {
        message = "Sorry, you need an adult with you"
    }else if(personAges < 13 && parentBoolean === true) {
        message = "You can enter with  adult supervision!"
    }else if(personAges > 13) {
        message = "You can enter by yourself!"
    }

    return message;
}

console.log(ageForEntry(14, true));

// switch case for system status
function messageReader(status) {
    let message = "";
    switch (status) {
        case "start":
            message = "System starting";
            break;
        case "stop":
            message = "System stopping";
            break;
        case "pause":
            message = "System paused";
            break;
        case "resume":
            message = "System resuming"
            break;
        default:
            break;
    }
    return "The System is: " + message;
}

console.log(messageReader("start"));

// Gleich oder ungleich
function evenOrOdd(number) {
    let rnd = parseInt(number);
    if(rnd % 2 == 0) {
        return "The number is even."
    }else if(rnd % 2 == 1) {
        return "The number is odd."
    }
}

console.log(evenOrOdd(2));

// umfang vom rechteck berechnen
function rechteck(string1, string2) {
    let float1 = parseFloat(string1);
    let float2 = parseFloat(string2);
    let area = 0;
    let perimeter = 0;

    area = float1 * float2;
    perimeter = 2 * (float1 + float2);
    return "the area is: " + area + " and th perimeter is: " + perimeter;
}

console.log(rechteck("15", "3"));

// years to death
function ageTo120(age) {
    let result = 0;
    let endAge = 120;
    if(age < endAge) {
        result = endAge - age;
        return result + " years till " + endAge;
    }
}

console.log(ageTo120(20));

// bill split calculator
function billSplitCalculator(amount, counter, procent) {
    let billAmount = parseFloat(amount);
    let numPerson = parseInt(counter);
    let tipPercentage = parseFloat(procent);

    let tipAmount = (tipPercentage / 100) * billAmount;
    let result = tipAmount + billAmount;
    let amountPerPerson = result / numPerson;

    let message = "Bill Split Calculator " + 
    "Total (including tip): $" + result  +
    " Each person pays: $" + amountPerPerson;
    return message;
}

console.log(billSplitCalculator(60, 4, 10));

// for loop multiplicator
function multiForLoop(num) {
    let array = [1, 22, 13, 42, 15, 8];
    let number = parseInt(num);
    for (let index = 0; index < array.length; index++) {
        let result = array[index] * number;
        console.log(result);
    }
}

multiForLoop(4);

// for skip four numbers and even numbers
function skipEven() {
    let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for (let index = 0; index < numbers.length; index++) {
        if(numbers[index] % 2 === 1) {
            if (numbers[index] % 4 === 1) {
                continue;
            }
            console.log(index);
        }
    }
}

skipEven();

// find the two numbers for the same result
function numberCouple(numb) {
    let number = parseInt(numb);
    for (let i = 1; i < number; i++) {
        for (let y = 1; y < number; y++) {
            if(i + y === number){
                console.log(i+ " " + y);
            }
        } 
    }
}

numberCouple(10);

// FizzBuzz with Twist
function fizzBuzz(num) {
    let number = parseInt(num);
    let welcome = "Welcome to FizzBuzz!";
    if(number % 3 === 0 && number % 7 === 0) {
        return welcome + " " + "FizzBuzz";
    }else if(number % 3 === 0) {
        return welcome + " " + "Buzz";
    }else if(number % 7 === 0) {
        return welcome + " " + "Fizz";
    }else {
        return number.toString();
    }
}

console.log(fizzBuzz(21));


// ARRAY
function firstAndLast() {
    let arr = [1, 2, 3, 4, 5, 6];
    let first = arr[0];
    let last = arr.pop();
    let result = first + last;
    console.log(result);
}

firstAndLast();

function changeElement(array, startIndex, endIndex, element) {
    let arr = [];
    array.splice(startIndex, endIndex ,element)
    arr.push(array);
    return arr;
}

console.log(changeElement([1, 2, 3, 4, 5, 6, 7],0, 2, "aa"));

function changeElement2(array, index, element) {
    array[index] = element;
    return array;
}

console.log(changeElement2([1, 2, 3, 4, 5, 6, 7, 8], 2, 5));

function swapEnds(array) {
    let first = array.shift();
    let last = array.pop();
    array.push(first);
    array.unshift(last);
    return array;
}

console.log(swapEnds([1, 2, 3, 4]));

function swapArray() {
    let array = ["red", "blue", "green"];
    array.push("yellow");
    let removedColor = array.shift();
    array.unshift("purple");
    let lastColor = array.pop();
    return array + " " + removedColor + " " + lastColor;
}

console.log(swapArray());

function includ(array, index) {
    array.includes(index);
    if(array == index) {
        return array.indexOf(index);
    }else {
        return array.indexOf(index);
    }
}

console.log(includ([1, 3, 4, 6, 9, 2], 31));

function methodOfJS() {
    let numbers = [40, 10, 30, 20, 50, 30, 10];
    numbers.sort((a,b) => a - b);
    numbers.reverse();
    let firstIndex = numbers.indexOf(30);
    let hasHundred = numbers.includes(100);
    return numbers + " " +  firstIndex + " " + hasHundred;
}

console.log(methodOfJS());

function toArrayNumber() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arr = [];
    array.forEach((ar, index) => {
        if( ar < 50 || ar % 5 == 0  ){
            arr.push(array[index]);
        }
    });
    return arr;
}

console.log(toArrayNumber());
