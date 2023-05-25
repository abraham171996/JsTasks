//Array

//clear()
const arr = [1,2,3,3,45,6,2,45,"",null,false,0]
const newArr = [5,6,7,889,3]
Array.prototype.clear = function(){
   this.length=0
}

arr.clear()
console.log(arr);

//isEmpty()

Array.prototype.isEmpty = function(){
    this.splice(0,this.length)
}
arr.isEmpty()
console.log(arr);
newArr.isEmpty()
console.log(newArr);

//removeDuplicates()

Array.prototype.removeDuplicates = function(){
    let emptyArr = []
    this.forEach(elem => {
        if(!emptyArr.includes(elem)){
            emptyArr.push(elem);
        }
        
    })
    return emptyArr
}
let result = arr.removeDuplicates()
console.log(result);

//removeFalsies()

Array.prototype.removeFalsies = function(){
    let newArr2 = []
        this.filter((element) => {
                if(!element){
                    newArr2.push(element)
                }
            }
        )
        
        return newArr2
    }
arr.removeFalsies()
let result1 = arr.removeFalsies()

console.log(result1);