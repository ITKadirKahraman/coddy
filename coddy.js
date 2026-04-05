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
