// Function to sort an array of numbers
function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
}

// Example usage
let numbers = [34, 7, 23, 32, 5, 62];
let sortedNumbers = sortNumbers(numbers);

console.log(sortedNumbers); // Output: [5, 7, 23, 32, 34, 62]