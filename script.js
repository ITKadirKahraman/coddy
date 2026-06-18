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

function countVowels(str) {
    let count = 0;
    for(const string of str) {
        if(string === "a") {
            count++;
        }else if(string === "e") {
            count++;
        }else if(string === "i") {
            count++;
        }else if(string === "o") {
            count++;
        }else if(string === "u") {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Mihrima Nur Kahraman"));

function countNumbers(number) {
    let count = 0;
    for(const num of number) {
        if (num == 1) {
            count++;
        } else if(num == 2){
            count++;
        } else if(num == 3){
            count++;
        } else if(num == 4){
            count++;
        } else if(num == 5){
            count++;
        } else if(num == 6){
            count++;
        } else if(num == 7){
            count++;
        } else if(num == 8){
            count++;
        } else if(num == 9){
            count++;
        }
    }
    return count;
}

console.log(countNumbers("Kahram42an"));

function pCounter(string) {
    let count = 0;
    for(const char of string) {
        if(char.toLowerCase() === "p") {
            count++;
        }
    }
    return count;
}

console.log(pCounter("Haploopdwidpphoqwdhowqpasowdsp"));

function sliceNumbers() {
    let numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45];
    let number = [];
    let sliceNumbers = numbers.slice(2, 7);
    number.push(sliceNumbers);
    return number;
}

console.log(sliceNumbers());

function otherMethods() {
    let numbers = [1,2,3,4,5];
    let endNum = [6,7,8];
    let arr = numbers.concat(endNum);
    let arrJoin = arr.join(',');
    let sliceArr = numbers.slice(0, 3);
    numbers.splice(1,1, 99);
    return numbers;
}

console.log(otherMethods());

function formatSentence(sentence) {
    let word = sentence.split(" ");
    let result = word.join("-");
    return result;
}

console.log(formatSentence("Galatasaray ist ein guter Klub."));

function mapTested() {
    let numbers = [1, 2, 3, 4, 5];
    let multiNum = numbers.map(element => element * 2);
    let filterNum = multiNum.filter(element => element > 3);
    return filterNum;
}

console.log(mapTested());

function transformArray(array) {
    let filterArr = array.filter(element => element >= 10);
    let multiArr = filterArr.map(element => element * 2);
    return multiArr;
}

console.log(transformArray([1, 3, 14, 18, 9, 4, 6, 11, 10, 15]));

function mapAndFilter() {
    let numbers = [1, 2, 3, 4, 5];
    let mapNumbers = numbers.map(element => element * 3);
    let filterNumber = mapNumbers.filter(element => element > 3);
    return filterNumber;
}

console.log(mapAndFilter());

let grocery = [];

function addItem(item) {
    grocery.push(item);
    let message = `${item} added to the grocery list.`
    return message;
}

console.log(addItem("Milk"));
console.log(addItem("Bread"));
console.log(addItem("Eggs"));

function removeItem(item) {
    const index = grocery.indexOf(item);
    if(index > -1){
        grocery.splice(index, 1);
    }
    let message = `${item} is not in the grocery list.`;
    return message;
}

console.log(removeItem("Eggs"));
console.log(removeItem("Milk"));

function viewList() {
    let message = "Grocery List: ";
    if(grocery.length < 1) {
        message = "The grocery list is empty."
    }

    for (let index = 0; index < grocery.length; index++) {
        message += `${index + 1}. ${grocery[index]} `;
    }

    return message;
}

console.log(viewList());

function starpyramid(n) {
    let number = parseInt(n);
    let char = "*";
    for (let index = 1; index <= number; index+=2) {
        console.log(char.repeat(index));
    }
}

starpyramid(10);

function doubleOdds(numbers) {
    let odd = numbers.filter(element => element % 2 === 1);
    let num = odd.map(element => element * 2);
    return num;
}

function doubleOddsPart2(numbers) {
    let arr = [];
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] % 2 === 1) {
            numbers[index] = numbers[index] * 2;
            arr.push(numbers[index]);
        }
    }

    return arr;
}

console.log(doubleOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(doubleOddsPart2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*
*****   Logik & Ablauf
*/

function greetAll(string) {
    let name = [];
    name.push(string);
    let message = "";
    for (let index = 0; index < name.length; index++) {
        message += `Hello, ${name[index]}!\n`;
    }
    return message;
}

console.log(greetAll("Kadir"));
console.log(greetAll("Mihrima"));

function alternateCase(string) {
    let str = "";
    for (let index = 0; index < string.length; index++) {
        if(index % 2 === 0) {
            str += string[index].toUpperCase();
        }else if(index % 2 === 1) {
            str += string[index].toLowerCase();
        }
    }
    return str;
}

console.log(alternateCase("Galatasaray"));

function countUniqueVowels(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let s = [];
    for (let index = 0; index < string.length; index++) {
        if(vowels.includes(string[index]) && !s.includes(string[index])) {
            s += string[index];
        }
    }
    return s.length;
}

console.log(countUniqueVowels("Malak, Hello World"));


function alternateCase2(string) {
    let str = "";
    for (let index = 0; index < string.length; index++) {
        if (index % 2 === 0) {
            str += string[index].toUpperCase();
        } else  {
            str += string[index].toLowerCase();
        }
    }
    return str;
}

console.log(alternateCase2("forzafußball"));


function formatBlogTitle(string) {
    let blogTitle = `${string}`;
    let blog = blogTitle.trim();
    let words = blog.split(" ");

    for (let index = 0; index < string.length; index++) {
        if(words[index]) {
            words[index] = words[index][0].toUpperCase() + words[index].substring(1).toLowerCase(); 
        }
    }

    let formatedWords = words.join(" ");
    let word = formatedWords.replaceAll("Javascript", "JavaScript");

    return word;
}

console.log(formatBlogTitle(" how to learn javascript for beginners "));

function stringWeav(st, str) {
    let string = st.replace(/\d+/g, "");
    let string2 = str.replace(/\d+/g, "");
    let string3 = string + string2;
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    for (let index = 0; index < string3.length; index++) {
        if (string3[index] === vowels[index]) {
            string3[index].toUpperCase();
        }
    }
    return string3;
}

console.log(stringWeav("Kad2i332r", "Kahr2326a8m12an"));

function stringWeaver(str1, str2) {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    // clean numbers from string
    let cleanStr1 = '';
    for(let index = 0; index < str1.length; index++) {
        if(!numbers.includes(str1[index])) {
            cleanStr1 += str1[index];
        }
    }

    let cleanStr2 = '';
    for(let index = 0; index < str2.length; index++) {
        if(!numbers.includes(str2[index])) {
            cleanStr2 += str2[index];
        }
    }

    // combine cleaned strings 
    let combined = `${cleanStr1} ${cleanStr2}`;

    // convert vowels to uppercase
    let result = '';
    for(let index = 0; index < combined.length; index++) {
        let char = combined[index];
        if(vowels.includes(char)) {
            char = char.toUpperCase();
        }
        result += char;
    }

    return result;
}

console.log(stringWeaver("Kad2i332r", "Kahr2326a8m12an"));


function twoStringWeaver(str1, str2) {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let clearString1 = "";
    for (let index = 0; index < str1.length; index++) {
        if(!numbers.includes(str1[index])) {
            clearString1 += str1[index];
        }
    }

    let clearString2 = "";
    for (let index = 0; index < str2.length; index++) {
        if( !numbers.includes(str2[index]) ) {
            clearString2 += str2[index];
        }
    }

    let string = `${clearString1} ${clearString2}`;
    let result = "";
    for (let index = 0; index < string.length; index++) {
        let char = combined[index];
        if(vowels.includes(char)) {
            char = char.toUpperCase();
        }
        result += char;
    }

    return result;
}

// Mehrdimensionale Arrays
function getColumn(array, numberOfRows, colIndex) {
    let arr = [];
    for (let index = 0; index < numberOfRows; index++) {
        arr.push(array[index][colIndex])
    }
    return arr;
}

console.log(getColumn([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3, 1));

function getElementsInRow(grid, rowIndex) {
    let array = [];
    for (let index = 0; index < grid.length; index++) {
        if(rowIndex < 0 || rowIndex >= grid.length) {
            return [];
        }else if(index == rowIndex) {
            array = grid[index]
        }
    }

    return array;
}

console.log(getElementsInRow([[1,2,3],[4,5,6],[7,8,9]], 0))


function getColumn2(matrix, numberOfRows, colIndex) {
    let array = [];
    for (let index = 0; index < numberOfRows; index++) {
        array.push(matrix[index][colIndex]);
    }

    return array;
}

console.log(getColumn2([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3, 1));

function getElementsInRow2(grid, rowIndex) {
    let arr = [];

    for (let index = 0; index < grid.length; index++) {
        if (rowIndex < 0 || rowIndex >= grid.length) {
            return [];
        }else if(index == rowIndex){
            arr = grid[index];
        }
    }

    return arr;
}


function countOccurrences(matrix, target) {
    let count = 0;
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y].includes(target)) {
                count++;
            }
        }
    }
    return count;
}

console.log(countOccurrences([["cat", "dog", "cat"], ["dog", "cat", "dog"]], "dog"));

function findMaxInRows(matrix) {
    let array = [];
    for (let x = 0; x < matrix.length; x++) {
        let max = matrix[x][0];
        for (let y = 0; y < matrix[x].length; y++) {
            if (matrix[x][y] > max) {
                max = matrix[x][y];
            }
        }

        array.push(max);
    }

    return array;
}

console.log(findMaxInRows([[10,20,15],[5,11,8],[25,4,13],[14,16,22]]));

function mirrorRows(matrix) {
    let arr = [];
    for (let x = 0; x < matrix.length; x++) {
        arr.push(matrix[x]);
        if(arr[x] == matrix[x]) {
            arr[x].reverse();
        }
    }

    return arr;
}

console.log(mirrorRows([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

function mirrorRows2(matrix) {
    let arr = [];
    for (let x = 0; x < matrix.length; x++) {
        arr.push(matrix[x]);
        for (let y = 0; y < matrix[x].length; y++) {
            if(arr[x] == matrix[x]) {
                arr[x].reverse();
            }   
        }
    }

    return arr;
}

console.log(mirrorRows2([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

function combineMatrices(matrixA, matrixB, op) {
    let arr = [];
    for (let x = 0; x < matrixA.length; x++) {
        arr[x] = [];
        for (let y = 0; y < matrixB[x].length; y++) {
            if(op === '+') {
                arr[x][y] = matrixA[x][y] + matrixB[x][y];
            } else if(op === '-') {
                arr[x][y] = matrixA[x][y] - matrixB[x][y];
            }
        }
    }

    return arr;
}

console.log(combineMatrices([[1, 2], [3, 4]],[[5, 6], [7, 8]], '+'));

function sumJagged(matrix) {
    let result = 0;
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            result += matrix[x][y];
        }
    }
    return result;
}

console.log(sumJagged([[1000.5, 2000], [500.25], [750.75, 250.5, 1500]]));

function flattenJagged(matrix) {
    let array = [];
    for (let x = 0; x < matrix.length; x++) {
        for (let y = 0; y < matrix[x].length; y++) {
            array.push(matrix[x][y]);
        }
    }
    return array;
}

console.log(flattenJagged([[1,2,3],[4,5],[6,7,8,9]]));

function countAllStrings(array) {
    let count = 0;
    let arr = [];
    for (let x = 0; x < array.length; x++) {
        for (let y = 0; y < array[x].length; y++) {
            for (let z = 0; z < array[x][y].length; z++) {
                count++;
            }
        }
    }
    return count;
}

console.log(countAllStrings([ [["hello", "world"], ["test"], ["coding"]], [["array"], ["javascript"], ["fun", "times"]], [["three", "dimensional"], ["data", "structure"]] ]));

function find3DElement(array, x, y, z) {
    let message = "Invalid coordinates";
    let char = '';
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            for (let k = 0; k < array[i][j].length; k++) {
                if (array[i][j][k].includes(array[x][y][z])) {
                    char = array[x][y][z];
                }
            }
        }
    }

    if(x < 0 || x >= array.length){
        return message;
    } 
    
    if(y < 0 || y >= array[x].length){
        return message;
    } 
    
    if(z < 0 || z >= array[x][y].length){
        return message;
    }
    return char;
}

console.log(find3DElement([[["cat","dog"],["elephant","frog"]],[["giraffe","hippo"],["iguana","jaguar"]]]
, 1, 0, 0));

function printPatterns(matrix) {
    let mainDiagonal = []
    // TODO: Implement
    for (let index = 0; index < matrix.length; index++) {
        mainDiagonal.push(matrix[index][index]);
    }
    console.log("Main Diagonal:", mainDiagonal.join(" "));

    let antiDiagonal = [];
    // TODO: Implement
    for (let index = 0; index < matrix.length; index++) {
        antiDiagonal.push(matrix[index][matrix.length - 1 - index])
    }
    console.log("Anti-Diagonal:", antiDiagonal.join(" "));
    
    let topBorder = [];
    // TODO: Implement
    for (let index = 0; index < matrix.length; index++) {
        topBorder.push(matrix[0][index]);
    }
    console.log("Top Border:", topBorder.join(" "));
    
    let bottomBorder = [];
    // TODO: Implement
    for (let index = 0; index < matrix.length; index++) {
        bottomBorder.push(matrix[matrix.length - 1][index]);
    }
    console.log("Bottom Border:", bottomBorder.join(" "));
    
    let leftBorder = [];
    // TODO: Implement
    for (let index = 0; index < matrix.length; index++) {
        leftBorder.push(matrix[index][0])
    }
    console.log("Left Border:", leftBorder.join(" "));
    
    let rightBorder = [];
    // TODO: Implement
    for (let index = 0; index < matrix.length; index++) {
        rightBorder.push(matrix[index][matrix.length - 1])
    }
    console.log("Right Border:", rightBorder.join(" "));

    return `
    Main Diagonal: ${mainDiagonal.join(" ")}
    Anti Diagonal: ${antiDiagonal.join(" ")}
    Top Border: ${topBorder.join(' ')}
    Bottom Border: ${bottomBorder.join(" ")}
    Left Border: ${leftBorder.join(" ")}
    Right Border: ${rightBorder.join(" ")}
    `
}

console.log(printPatterns([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));

function stackMatrices(matrixList) {
    let arr = [];
    for (let x = 0; x < matrixList.length; x++) {
        for (let y = 0; y < matrixList[x].length; y++) {
            arr.push(matrixList[x][y]);
        }
    }
    return arr;
}

console.log(stackMatrices([   [     [1, 2, 3, 4]   ],   [     [5, 6, 7, 8],     [9, 10, 11, 12]   ],   [     [13, 14, 15, 16]   ] ]));

function findSumPatterns(matrix) {
    let mainSum = 0;
    // Calculate main diagonal sum
    for (let index = 0; index < matrix.length; index++) {
        mainSum += matrix[index][index];
    }

    // Calculate anti-diagonal sum
    let antiMainSum = 0;
    for (let index = 0; index < matrix.length; index++) {
        antiMainSum += matrix[index][matrix.length - 1 - index];
    }

    // Calculate border sum
    let borderSum = 0;
    /*
    for (let index = 0; index < matrix.length; index++) {
        borderSum += matrix[0][index] + matrix[matrix.length -1][index] + matrix[index][0] + matrix[index][matrix.length - 1]
    }
    */

    for (let j = 0; j < matrix.length; j++) {
        borderSum += matrix[0][j];
        if (matrix.length > 1) { 
            borderSum += matrix[matrix.length-1][j]; 
        }
    }
    
    for (let i = 1; i < matrix.length-1; i++) {
        borderSum += matrix[i][0];
        if (matrix.length > 1) {
            borderSum += matrix[i][matrix.length-1];
        }
    }

    // Format and print the results
    return `
    Main Diagonal sum: ${mainSum}
    Anti Diagonal sum: ${antiMainSum}
    Border sum: ${borderSum}
    `;
}

console.log(findSumPatterns([[1,2,3],[4,5,6],[7,8,9]]));
