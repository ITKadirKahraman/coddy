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

