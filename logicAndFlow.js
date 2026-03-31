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
