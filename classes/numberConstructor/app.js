//Number

//isPrime()

const num1 = 23

Number.prototype.isPrime = function(){
    if(this%2!==0 && this>0 ||this==2){
        return `Number is prime`
    }
    else{
        return `Number is not prime`
    }
}

let result1 = num1.isPrime()
console.log(result);

//isEven()

Number.prototype.isEven = function(){ return this%2===0}
const ed = 13
console.log(ed.isEven());

//isInfinity()
let inf = Infinity
const infinityElement = 32


Number.prototype.isInfinity = function(){
    if(this/0&&inf/0){
        return inf
    }
    else{
       return `is not ${inf}`
    }
}

let result2 = infinityElement.isInfinity()
console.log(result);