// FizzBuzz mit einer Wendung

let num = parseInt(inp); // Don't change this line

// Type your code below
console.log("Welcome to FizzBuzz!");
function fizzbuzz(int){
    if(int % 3 === 0 && int % 7 === 0){
        console.log("FizzBuzz");
    }else if(int % 3 === 0){
        console.log("Fizz");
    }else if(int % 7 === 0){
        console.log("Buzz");
    }else if(int.toString().includes('3')){
        console.log("Almost Fizz");
    }else{
        let c = String(int); // console.log(num.toString());
        console.log(c);
    }
}
for(let i = 1; i <= num; i++){
    fizzbuzz(i);
}
