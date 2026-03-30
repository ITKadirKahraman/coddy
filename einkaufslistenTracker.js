let list = [];

function viewList(){
    if(list.length === 0){
        console.log(`The grocery list is empty.`);
        return;
    }

    console.log("Grocery List:")
    for(let i = 0; i < list.length; i++){
        console.log(`${i + 1}. ${list[i]}`);
    }
}

function addItem(item){
    list.push(item);
    console.log(`${item} added to the grocery list.`);
}

function removeItem(item){
    if(list.includes(item)){
        let index = list.indexOf(item);
        list.splice(index, 1);
        console.log(`${item} removed from the grocery list.`);
    }else {
        console.log(`${item} is not in the grocery list.`);
    }
}

viewList();
addItem("Milk");
addItem("Bread");
addItem("Eggs");
viewList();
removeItem("Bread");
viewList();
removeItem("Cheese");
