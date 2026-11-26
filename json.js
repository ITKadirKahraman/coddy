function findMissingKeys(data, requiredKeys) {
  // Write your code here
  let arr = [];
  for(let i = 0; i < requiredKeys.length; i++) {
    if(!(requiredKeys[i] in data)) {
        arr.push(requiredKeys[i]);
    }
  }
  return arr;
}

// Do not modify below this line

console.log(findMissingKeys({"username":"johndoe","email":"johndoe@example.com"}, ["username","email","age"]));

function analyzeShoppingCart(cart) {
    // Write code here
    let totalItems = Object.keys(cart).length;
    let totalQuantity = Object.values(cart).reduce((sum, value) => sum + value, 0);
    
    return {
        totalItems: totalItems,
        totalQuantity: totalQuantity,
    };
}

console.log(analyzeShoppingCart({ "banana": 5, "apple": 3, "orange": 2, "mango": 1, "pear": 4 }));

function findMostFrequentItem(inventory) {
  // Write your code here
  let keys = Object.keys(inventory);
  let mostFrequentItem = keys[0];
  let highestQuantity = inventory[keys[0]];

  for (let index = 1; index < keys.length; index++) {
    let currentKey = keys[index];
    if(inventory[currentKey] > highestQuantity) {
        highestQuantity = inventory[currentKey];
        mostFrequentItem = currentKey;
    }
  }
  return mostFrequentItem;
}


console.log(findMostFrequentItem({"cake":12,"pie":10,"cookie":12,"bread":15}));
