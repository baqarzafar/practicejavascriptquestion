let customfunction = (array)=>{
    if(array.length <= 0 ){
        console.log("array is not accepted ")
        
    }
    else {
        console.log("array is acceptable")
    }
}
customfunction(["baqar" , "faitma"] )
customfunction([] )

let number2 = 0;
let array2 = ['pakistan', 'india', 'bangladesh', 'afghanistan'];

let customfood = () => {
    if (number2 < array2.length) {
           
        console.log(array2[number2]);
       number2 += 1;
        customfood();
    }
}

customfood();
function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    } else {
        // Recursive case: n! = n * (n-1)!
        return n * factorial(n - 1);
    }
}

// Test the function
console.log(factorial(5)); // Output: 120
console.log(factorial(3)); // Output: 6
console.log(factorial(0)); // Output: 1