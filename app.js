function alternateOrder(arr) {
    let positives = arr.filter(num => num > 0);
    let negatives = arr.filter(num => num < 0);
    
    let result = [];
    let maxLength = Math.max(positives.length, negatives.length);
    
    for (let i = 0; i < maxLength; i++) {
        if (positives[i]) result.push(positives[i]);
        if (negatives[i]) result.push(negatives[i]);
    }
    
    return result;
}

// Example usage
let inputArray = [5, 56, -4, 5, -23, 1, -34, 12, -14];
let arrangedArray = alternateOrder(inputArray);
console.log(arrangedArray); // Output the arranged array

// You can display the result on the webpage if you want
document.write("<p>Arranged Array: " + arrangedArray.join(', ') + "</p>");