//Object

let obj =   {name1: 'pakitotunak',age: 28,gender: "man",job: 'designer'}

//objLength()

Object.prototype.objLength = function(){
    return Object.keys(this).length
}

obj = obj.objLength()
console.log(obj);

//firstProperty()

Object.prototype.firstProperty = function(){
    return Object.entries(this)[0]
}

obj = obj.firstProperty()
console.log(obj);

//lastProperty()

Object.prototype.lastProperty = function(){
    let objLastIndex = Object.keys(this).length- [1]
    return Object.entries(this)[objLastIndex]
}

obj = obj.lastProperty()
console.log(obj);