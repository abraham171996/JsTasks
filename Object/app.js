const obj1 = {
    name1: 'ali',
    age1: "17",
    gender1: "man",
    job1: 'fe'
}

const obj2 = {
    name2: 'tesla',
    age2: "15",
    gender2: "woman",
    job2: 'fs'
}

const concatObjects = (obj1,obj2)=>{
    let newObj = Object.assign({},obj1,obj2)
    return newObj
}

console.log(concatObjects(obj1,obj2));


//A function that sorts the properties of an object in alphabetical order


function alphabeticObj(obj){
    let alphabetical =  Object.keys(obj).sort();
    return alphabetical
};

console.log(alphabeticObj(obj1));

//Write a function to check whether two objects have the same properties and values. (do both have the same properties)
const keys1 = Object.entries(obj1);
const keys2 = Object.entries(obj2);

const samePropertiesValues = (obj1,obj2)=>{
    let checkObj = null
    for(let i = 0;i<obj1.length;i++){
       for(let j =0 ;j<obj2.length;j++){
           
            if (obj1[i].join(",")===obj2[j].join(",")) {
                checkObj = true
            }
            else{
                checkObj = false
            }
       }
    }

    return checkObj
}

console.log(samePropertiesValues(keys1,keys2x));


//4


let keys = Object.keys(obj1).concat(Object.keys(obj2)) 
console.log(keys);
let values =Object.values(obj1).concat(Object.values(obj2))
console.log(values);
function combineObj(key,value){
    let combineResult = "";
    for(let i=0; i<key.length; i++){
        
       for(let j = 0; j<value.length;j++){
        combineResult += key[i]  + "=" + value[j] + "&"  
        
       }
        
    }
    return combineResult.slice(0,combineResult.length-1)
}
console.log(combineObj(keys,values));

//the greatest value

let values2 = Object.values(obj1)
const greatestValue = (values)=>{
    let mainValues = []
    for(let i=0 ; i<values.length;i++){
        mainValues.push(values[i].length)
    }
     return    Math.max(...mainValues) ;
}

console.log(greatestValue(values2));


//squar

let valuesSquar = Object.values(obj1)
let valuesSquar2 = Object.values(obj2)

const squarObj = (obj)=>{
   let square = 0
    for(let i = 0;i<obj.length;i++){
        if(!isNaN(obj[i])){
            square=obj[i]**2
        }
    }
    return square
}

console.log(squarObj(valuesSquar));
console.log(squarObj(valuesSquar2));


//Write a function that returns the properties of the values ​​contained in the object as a check string

function getStringProperties(obj) {
    const properties = [];
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        properties.push(key);
      }
    }
    return properties;
  }

  console.log(getStringProperties(obj1));
  console.log(getStringProperties(obj2));

  //The function should return a string combining the properties of that object with commas. For example, if the given object is {name:'ali', age:12}, it should return the name,age string.

let objj = {ad:'ali', age:12}

function convertObjToStr(n){
    let newObj = Object.keys(n)
    return newObj.join(",")
}

console.log(convertObjToStr(objj));