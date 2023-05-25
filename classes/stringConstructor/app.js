//String

//toCapitalize()

String.prototype.toCapitalCase = function(){
    return this.replace(this[0],this[0].toUpperCase())
}
let name1 = "abraham"
name1=name1.toCapitalCase()
console.log(name1);

//removeWhiteSpaces()

let sentenceWithWihteSpace = "Hello World I am Front-end developer"

String.prototype.removeWhiteSpaces = function(){
   return this.split(' ').join("").toString()
}

let result = sentenceWithWihteSpace.removeWhiteSpaces()
console.log(result);


//filterDigits()


let filterElement = "aa1223bdsf450192mm"

String.prototype.filterDigits = function(){
    let emptyDigitsArr = []
    this.split("").forEach((elem)=>{
        if(elem/1==elem){
           emptyDigitsArr.push(elem)
        }
    })
    return emptyDigitsArr
}

let result3 = filterElement.filterDigits()
console.log(result3);