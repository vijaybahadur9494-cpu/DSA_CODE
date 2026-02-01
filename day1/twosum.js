// Two Sum Problem: Find two numbers that add up to a target sum

function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}

// Test Cases
console.log("Test 1:", twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log("Test 2:", twoSum([3, 2, 4], 6)); // [1, 2]
console.log("Test 3:", twoSum([3, 3], 6)); // [0, 1]
console.log("Test 4:", twoSum([1, 5, 7, -1], 6)); // [1, 3]
console.log("Test 5:", twoSum([10, 20, 30, 40], 50)); // [0, 3]
console.log("Test 6:", twoSum([5, 5, 5, 5], 10)); // [0, 1]
console.log("Test 7:", twoSum([-1, -2, -3, 5], 2)); // [2, 3]
console.log("Test 8:", twoSum([0, 4, 3, 0], 0)); // [0, 3]
console.log("Test 9:", twoSum([100, 200, 300], 500)); // [1, 2]
console.log("Test 10:", twoSum([1, 2, 3, 4, 5], 9)); // [3, 4]