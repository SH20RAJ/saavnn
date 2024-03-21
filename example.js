

// Get the string from localStorage
let storedString = localStorage.getItem('arr'); // Assuming "1, 2, 3, 4, 5" is stored


// Split the string into an array
let arr = storedString.split(',').map(item => parseInt(item.trim(), 10));

console.log(arr); // Output: [1, 2, 3, 4, 5]



let arr = [1, 2, 3, 4, 5];
arr = arr.sort(() => Math.random() - 0.5);
console.log(arr); // Output: shuffled version of the array
let arr = [1, 2, 3, 4, 5];
let shuffledArr = arr.slice().sort(() => Math.random() - 0.5);
console.log(shuffledArr); // Output: shuffled version of the array
console.log(arr); // Original array remains unchanged


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5];
let shuffledArr = shuffleArray(arr);
console.log(shuffledArr); // Output: shuffled version of the array



function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

let arr = [266673, 154017, 266673, 154017, 266673, 154017, 266673, 154017];
let newArr = removeDuplicates(arr);
console.log(newArr); // Output: [266673, 154017]


