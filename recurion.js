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