// Über Strings iterieren

function countUniqueVowels(str) {
    let arr = ['a','e','i','o','u','A','E','I','O','U'];
    let valueLength = [];
    for(let i = 0; i <= str.length; i++){
        if(arr.includes(str[i]) && !valueLength.includes(str[i])){
            valueLength.push(str[i]);
        }
    }
    return valueLength.length;
}

console.log(countUniqueVowels("Hello World"));
console.log(countUniqueVowels("Kahraman!"));
console.log(countUniqueVowels("Why myth? Psych!"));
console.log(countUniqueVowels("aEiOu AeIoU!"));
console.log(countUniqueVowels("aaa eee iii ooo uuu"));
console.log(countUniqueVowels("PROGRAMMING!"));


// Template-Literale

function greetAll(name) {
    for(let i = 0; i < name.length; i++){
        return `Hello, ${name[i]}`;
    }
}

greetAll('Kadir', 'Sinan', 'Murat', 'Selcuk');

// String-Methoden
// ungerade Zahl groß und ungerade Zahl klein schreiben

function alternateCase(str) {
  // Write your code here
  let arr = "";
  for(let i = 0; i < str.length; i++){
    if(i % 2 == 0){
        arr += str[i].toUpperCase();
    }else if(i % 2 == 1){
        arr += str[i].toLowerCase();
    }
  }
  return arr;
}
// Do not write anything outside function

console.log(alternateCase("Hello World"));
console.log(alternateCase("programming"));
console.log(alternateCase(" "));
console.log(alternateCase("12345"));


// Verschachtelte Schleifen mit 2D-Arrays
// anzahl der gesuchten strings zählen
function countOccurrences(matrix, target) {
  // TODO: Implement logic to count how many times 'target' appears in matrix
  let count = 0;
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        if(matrix[i][j].includes(target)){
            count++;
        }
    }
  }
  return count;
}
// Do not write anything outside function
console.log(countOccurrences([["a", "b", "a"], ["c", "a", "d"], ["a", "e", "f"]], 'b'));


let names = ["Alice", "Bob", "Charlie"];
function greetAll(names) {
  // Write your code here
  for(let i = 0; i < names.length; i++){
    console.log(`Hello, ${names[i]}!`);
  } 
}

greetAll(names);


/*
Erstellen Sie eine Funktion namens reverseVowels, 
die einen String als Parameter nimmt und den String zurückgibt, 
bei dem alle Vokale (a, e, i, o, u) in ihrer Position umgekehrt sind. 
Nicht-Vokal-Zeichen sollten in ihren ursprünglichen Positionen bleiben.

Zum Beispiel:

"hello" should return "holle" (because 'e' and 'o' swap positions)
"programming" should return "prigrammong" (because 'o', 'a', and 'i' are reversed)
Die Funktion sollte zwischen Groß- und Kleinschreibung unterscheiden 
(Groß- und Kleinbuchstaben-Vokale unterschiedlich behandeln).
*/

/*
function reverseVowels(str) {
    // Write your code here
    let value = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let word = str.split("");
    let pointerL = 0;
    let pointerR = str.length -1;
    while(pointerL < pointerR){
        if(!value.includes(word[pointerL])){
            pointerL++;
        }else if(!value.includes(word[pointerR])){
            pointerR--;
        }else if(value.includes(word[pointerL])){
            if(value.includes(word[pointerR])){
                let temp = word[pointerL];
                word[pointerL] = word[pointerR];
                word[pointerR] = temp;
                pointerL--;
                pointerR++;
            }
        }
    }
    return word.join("");
}
console.log(reverseVowels("hallo"));
console.log(reverseVowels("aeiou"));
console.log(reverseVowels("programming"));
console.log(reverseVowels("algorithm"));
console.log(reverseVowels("UnItEd StAtEs"));
console.log(reverseVowels("Vowels Are Fun"));
console.log(reverseVowels("cOndIngChAllenge"));
console.log(reverseVowels("ReverseVowels"));
*/

/*
Zugreifen auf 2D-Array-Elemente
Challenge

Einfach
Erstellen Sie eine Funktion namens getColumn, die drei Argumente nimmt: 
ein 2D-Array matrix, eine Ganzzahl numberOfRows und eine Ganzzahl colIndex. 
Die Funktion sollte ein Array zurückgeben, das alle Elemente in der angegebenen 
Spalte colIndex enthält.

*/

function getColumn(matrix, numberOfRows, colIndex) {
  // TODO: Return an array containing elements from the specified column index
  let arr = [];
  for(let i = 0; i < numberOfRows; i++){
    arr.push(matrix[i][colIndex]);
  }
  return arr;
}
// Do not write anything outside function

console.log(getColumn([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3, 1));

/*
Challenge
Erstellen Sie eine Funktion namens getElementsInRow, die zwei Argumente nimmt:

- Ein 2D-Array namens grid
- Eine Ganzzahl rowIndex

Die Funktion sollte ein Array zurückgeben, das alle Elemente in der angegebenen Zeile enthält
Wenn der rowIndex außerhalb der Grenzen liegt (negativ oder größer oder gleich der Anzahl der
Zeilen), geben Sie ein leeres Array zurück.
*/

function getElementsInRow(grid, rowIndex) {
  // TODO: Return an array with all elements in the specified row
  // If rowIndex is out of bounds, return an empty array
    if (rowIndex < 0 || rowIndex >= grid.length){
        return [];
    }else {
        return grid[rowIndex];
    }
}
// Do not write anything outside the function
console.log(getElementsInRow([[10,11,12,13],[14,15,16,17],[18,19,20,21]], 2));

/*
Challenge
Verschachtelte Schleifen mit 2D-Arrays

Beim Arbeiten mit 2D-Arrays verwenden wir oft verschachtelte Schleifen, um über jede Zeile und jede Spalte zu iterieren, was uns ermöglicht, jedes Element im Array zuzugreifen oder zu modifizieren.

Hier ist eine typische Struktur von verschachtelten Schleifen für ein 2D-Array:

const seats = [
  [true, true, false],
  [true, false, true]
];

for (let r = 0; r < seats.length; r++) {
  // Outer loop iterates over rows
  for (let c = 0; c < seats[r].length; c++) {
    // Inner loop iterates over columns
    // seats[r][c] can be accessed here
  }
}
Die äußere Schleife iteriert über die Zeilen, und die innere Schleife iteriert über die Spalten jeder Zeile. Auf diese Weise können Sie jedes Element im 2D-Array zugreifen, indem Sie 
array[r][c] verwenden.

Erstellen Sie eine Funktion namens countOccurrences, die ein 2D-Array von Strings matrix und einen String target annimmt. Sie sollte zurückgeben, wie oft target in allen Zeilen und Spalten vorkommt.
*/

function countOccurrences(matrix, target) {
  // TODO: Implement logic to count how many times 'target' appears in matrix
  let count = 0;
  for(let i = 0; i < matrix.length; i++){
    for(let y = 0; y < matrix[i].length; y++){
        if(matrix[i][y].includes(target) ){
            count++;
        }
    }
  }
  return count;
}
// Do not write anything outside function

console.log(countOccurrences([["a", "b", "a"], ["c", "a", "d"], ["a", "e", "f"]], "a"));

/*
Challenge
Verschachtelte Schleifen mit 2D-Arrays

Erstellen Sie eine Funktion namens findMaxInRows, die ein 2D-Array von Zahlen (matrix) akzeptiert. Die Funktion sollte:

Den maximalen Wert in jeder Zeile finden
Ein Array zurückgeben, das diese maximalen Werte enthält
Zum Beispiel:

const matrix = [
  [3, 7, 2],
  [9, 1, 5],
  [6, 0, 4]
];
Sollte [7, 9, 6] zurückgeben, da 7 der Max-Wert in Zeile 0 ist, 9 der Max-Wert in Zeile 1 und 6 der Max-Wert in Zeile 2.
*/

function findMaxInRows(matrix) {
  // Your code here
  let arr = [];
  let max = 0;
  for(let i = 0; i < matrix.length; i++){
    for(let y = 0; y < matrix[i].length; y++){
        if(matrix[i] > max){
            max = matrix[i][y];
        }
    }
    arr.push(max);
  }
  return arr;
}

// Do not modify below this line
console.log(findMaxInRows([[1,4,3],[7,5,9],[2,8,6]]));
/*
const zeile = [8, 2, 9];
let max = zeile[0]; // Initialisierung mit dem ersten Element

for (let i = 1; i < zeile.length; i++) {
  if (zeile[i] > max) {
    max = zeile[i];
  }
}
console.log(max); // Ausgabe: 9
*/

function mirrorRows(matrix) {
  // TODO: Return a new 2D array where each row is reversed.
  let arr = [];
  for(let i = 0; i < matrix.length; i++){
    arr.push(matrix[i]);
  }
  arr[0].reverse();
  return arr;
}
// Do not write anything outside function

console.log(mirrorRows([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

/*
Challenge

Erstellen Sie eine Funktion namens multiplyMatrices, 
die zwei Matrizen (matrixA und matrixB) nimmt und ihr Produkt zurückgibt.

Für die Matrizenmultiplikation:

Jedes Element in der Ergebnismatrix ist das Skalarprodukt einer Zeile aus 
der ersten Matrix und einer Spalte aus der zweiten Matrix
Matrix A mit Dimensionen (m × n) kann nur mit Matrix B mit Dimensionen (n × p) 
multipliziert werden Die resultierende Matrix wird Dimensionen (m × p) haben

Matrixmultiplikation erfordert drei verschachtelte Schleifen:
1. Äußere Schleife: Durchlaufen Sie jede Zeile der Matrix A 
2. Mittlere Schleife: Durchlaufen Sie jede Spalte der Matrix B   
3. Innere Schleife: Berechnen Sie das Skalarprodukt, indem Sie jedes 
Element in der Zeile von A und der Spalte von B durchlaufen
*/

function multiplyMatrices(matrixA, matrixB) {
  // Write your code here
  // Check if matrices can be multiplied
  // Create the result matrix with appropriate dimensions
  // Calculate each element in the result matrix
  

}
// Do not write anything outside function

console.log([[1,2,3],[4,5,6]][[7,8],[9,10],[11,12]]);
// Ausgabe: [ [ 58, 64 ], [ 139, 154 ] ]
