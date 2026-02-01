// Function to calculate sum of array elements
function arraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// Examples
console.log(arraySum([1, 2, 3])); // 6
console.log(arraySum([5, 10, 15, 20])); // 50
console.log(arraySum([100])); // 100
console.log(arraySum([])); // 0
console.log(arraySum([-1, -2, -3])); // -6
console.log(arraySum([1, -1, 2, -2])); // 0
console.log(arraySum([0.5, 1.5, 2])); // 4
console.log(arraySum([10, 20, 30, 40, 50])); // 150
console.log(arraySum([-5, 10, -3, 8, 4])); // 14
console.log(arraySum([999, 1, 1, 1, 1])); // 1003