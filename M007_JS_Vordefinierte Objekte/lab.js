let shoppingList = []

function addToList(item, amount) {
    let newEntry = [item, amount];
    shoppingList.push(newEntry);
}

function removeFromList(item) {
    for (let i = 0; i < item.length; i++) {
        if (shoppingList[i][0].toLowerCase() == item.toLowerCase()) {
            shoppingList.splice(i,1);
            break;
        }
    }
}

function convertToTitleCase(originalStr) {
    let wordArr = originalStr.split(" ");
    let newTitle = [];
    for (let index in wordArr) {
        let capitalized = wordArr[index][0].toUpperCase() + wordArr[index].slice(1).toLowerCase();
        newTitle.push(capitalized);
    }
    return newTitle.join(" ");
}