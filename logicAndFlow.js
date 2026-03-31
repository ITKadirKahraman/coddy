/*
****** String in der Tiefe
*/

function countUniqueVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    // Write code here
    let foundVowels = [];
    for(let i = 0; i <= str.length; i++){
        if(vowels.includes(str[i]) && !foundVowels.includes(str[i])){
            foundVowels.push(str[i]);
        }
    }
    return foundVowels.length;
}
// Do not write anything outside function


// ZWEI POINTER 

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
                pointerL++, 
                pointerR--;
            }
        }
    }

    return word.join("");
}

// Template-Literale

function greetAll(names) {
  // Write your code here
  for(let i = 0; i < names.length; i++){
    console.log(`Hello, ${names[i]}!`);
  }
}
// Do not write anything outside function

// String-Methoden toUpperCase and toLowerCase

function alternateCase(str) {
  // Write your code here
  let string = "";
  for(let i = 0; i < str.length; i++){
    if(i % 2 === 0){
      string += str[i].toUpperCase();
    }else if(i % 2 === 1){
      string += str[i].toLowerCase();
    }
  }
  return string;
}
// Do not write anything outside function

// String trimmen, Anfangsbuchstaben großschreiben und die Restlichen klein sowie JavaScript so ausgeben
function formatBlogTitle(title) {
  // Write your code here
  let string = title.trim();
  let words = string.split(" ");
  for(let i = 0; i < words.length; i++){
    if(words[i]){
      words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }
  }
  let formatedString = words.join(" ");
  string = formatedString.replaceAll("Javascript", "JavaScript");
  return string;
}
// Do not write anything outside function


function stringWeaver(str1, str2) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//  Write your code here
    let string1 = str1.replace(/\d+/g, '');  
    let string2 = str2.replace(/\d+/g, '');
    let finaleString = string1 + string2;
    let result = "";
    for(let i = 0; i < finaleString.length; i++){
        let char = finaleString[i];
        if(vowels.includes(char)){
            char = char.toUpperCase();
        }
        result += char;
    }

    return result;
}
//  Do not write anything outside function



/*
****** ODER
*/

function stringWeaver(str1, str2) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//  Write your code here

    let cleanStr1 = "";
    for(let i = 0; i < str1.length; i++){
        if(!numbers.includes(str1[i])){
            cleanStr1 += str1[i];
        }
    }

    let cleanStr2 = "";
    for(let i = 0; i < str2.length; i++){
        if(!numbers.includes(str2[i])){
            cleanStr2 += str2[i];
        }
    }

    let finaleString = cleanStr1 + cleanStr2;
    let result = "";
    for(let i = 0; i < finaleString.length; i++){
        let char = finaleString[i];
        if(vowels.includes(char)){
            char = char.toUpperCase();
        }
        result += char;
    }

    return result;
}
//  Do not write anything outside function
