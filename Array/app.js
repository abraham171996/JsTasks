//#Array

//function that deletes repeated elements

let arr = [1,2,3,4,56,465,76,788,12,3,4,6,1,2,465]
let num = 19   
let sliceCount = 5
const deletesRepeatedElements = (n)=>{
    let newElem = []
    n.forEach(element => {
        if(!newElem.includes(element)){
            newElem.push(element)
        }
    });
    return newElem
}

console.log(deletesRepeatedElements(arr));


//Write a function that converts the elements of the array to a string by combining them with 

const converArrayToString = (n)=>n.join("-")

console.log( converArrayToString(arr));


//Let the function return a new array consisting of the ones that are greater than the number we gave in that array.

const greaterNum = (numberArray,num)=>{
    let greaterNewArr = []
    numberArray.forEach(element => {
        if(element>num){
            greaterNewArr.push(element)
        }
    });
    return greaterNewArr
}

console.log(greaterNum(arr,num));


//4

const newArrDivide = (numbers,sliceCount)=>{
    const dividedArray = [];

    for (let i = 0; i < numbers.length; i += sliceCount) {
        const slice = numbers.slice(i, i + sliceCount);
        dividedArray.push(slice);
    }
    return dividedArray
}

console.log(newArrDivide(arr,sliceCount));