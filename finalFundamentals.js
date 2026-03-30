/*
Zahlenpyramide
Challenge
Jeder Testfall hat eine Eingabe – eine ungerade ganze Zahl. (gegeben)
Ihre Aufgabe ist es, eine n-Pyramide mit * auszugeben, hier sind einige Beispiele:
*/

let n = parseInt(inp); // Don't change this line
let char = "*";
for(let i = 1; i <= n; i+=2){
    console.log(char.repeat(i));
}

/*
Die Chancen verdoppeln
Challenge
Schreiben Sie eine Funktion namens doubleOdds, die einen Eingabewert annimmt:

1. numbers - ein Array von Zahlen.
Die Funktion sollte:

2. Nur die ungeraden Zahlen im Array verdoppeln.
3. Das resultierende Array zurückgeben.
*/

function doubleOdds(numbers) {
    // Write code here
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 1){
            numbers[i] = numbers[i] * 2;
        }
    }
    return numbers;
}

/* 
Was kaufen   
Challenge   
Schreibe eine Funktion namens analyzeBudget, die:   
   
Nimmt drei Argumente: eine Liste von Preisen, eine Liste von Artikelnamen und ein Budget pro Artikel.
Gibt aus:
Eine Liste von Artikeln, die du dir leisten kannst.
Die Gesamtkosten der erschwinglichen Artikel.
Die Anzahl der Artikel außerhalb des Budgets.
Beispiel:
Für prices = [10, 20, 5, 15], items = ["Notebook", "Pen", "Eraser", "Bag"] und budget = 10 sollte die Ausgabe sein:

Affordable items: "Notebook", "Eraser"
Total budget needed: 15
Items out of budget: 2
*/

function analyzeBudget(prices, items, budget) {
    // Write code here
    let product = [];
    let cost = 0;
    let count = 0;
    // Products
    for(let i = 0; i < items.length; i++){
        if(prices[i] <= budget){
            product.push(items[i]);
        }
    }

    // Items Cost
    for(let i = 0; i < items.length; i++){
        if(prices[i] <= budget){
            cost += prices[i];
        }
    }

    // Budget
    for(let i = 0; i < prices.length; i++){
        if(prices[i] > budget){
            count++;
        }
    }

    console.log(`Affordable items: ${product.join(",")}`);
    console.log(`Total budget needed: ${cost}`);
    console.log(`Items out of budget: ${count}`);
}
