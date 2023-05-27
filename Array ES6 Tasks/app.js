//Array ES6 Tasks

const domains = [
    {
        id: 0, name: 'baki.az',
        owner: {
            name: 'ali',
            age: 17,
            gender: "man",
            job: 'fe'
        }
    },
    {
        id: 1, name: 'fe.az',
        owner: {
            name: 'aydan',
            age: 15,
            gender: "woman",
            job: 'be'
        }
    },
    {
        id: 2, name: 'fs.com',
        owner: {
            name: 'tesla',
            age: 15,
            gender: "woman",
            job: 'fs'
        }
    },
    {
        id: 3, name: 'zoo.com',
        owner: {
            name: 'zabilia',
            age: 20,
            gender: "man",
            job: 'qa'
        }
    },
    {
        id: 4, name: 'zatachivak.com',
        owner: {
            name: 'pakitotunak',
            age: 28,
            gender: "man",
            job: 'designer'
        }
    },
]


//[forEach]

domains.forEach((elem)=>{
    if (elem.id === 0) {
        console.log(`${elem.name}-${elem.owner.name}-${elem.owner.gender}`);
    }
})


//(filter)
let womans = []
domains.filter((elem)=>{
    
    if(elem.owner.gender === "woman"){
         womans.push(elem.owner.gender)
        
    }
    
})
console.log(womans);


//(find)

domains.find((elem)=>{
    if(elem.id===3){
        console.log(elem);
    }
}) 


//(filter, endsWith)

let a = []
domains.filter((elem)=>{
    if(elem.owner.name.endsWith("a")){
        a.push(elem)
    }
})
console.log(a);


//(map)

let owners = []
domains.map((elem)=>{
    if(elem.owner.name==="ali"||elem.owner.name==="tesla"||elem.owner.name==="zabilia"){
        owners.push(elem)
    }
})
console.log(owners);


//(filter)

domains.filter((elem)=>{
   if(elem.owner.age>15 && elem.owner.age<20){
        console.log(elem);
   }
})


//(findIndex)

const findDesigner = elem =>elem.owner.job==="designer"
console.log(domains.findIndex(findDesigner));


//(map)

const ownersInformation =domains.map(el=>el.owner)
console.log(ownersInformation);


//(filter)

const domainCom = domains.filter(el=>el.name.endsWith(".com"))
console.log(domainCom);


//(filter, map)

const findDomain = domains.filter(domain=>domain.name.endsWith(".az")).
map(domains=>domains.owner.name)
console.log(findDomain);


//(filter, forEach)
let sumAge = 0
 domains.filter(domain=>domain.name.endsWith(".az")).
forEach(domains=>sumAge += +(domains.owner.age))
console.log(sumAge);


//(forEach)

let emptyNumArr = []
domains.forEach((elem)=>{
    let elemLeng = elem.name.length
    emptyNumArr.push(elemLeng)
})
console.log(Math.max(...emptyNumArr));


//(forEach)

let emptyAgeNum = []
domains.forEach((elem)=>{
    let ageLeng = elem.owner.age
    emptyAgeNum.push(ageLeng)
})
console.log(Math.max(...emptyAgeNum));


//(filter)

const findDomainIncN = domains.filter((elem)=>{
    if(elem.name.includes("n")||elem.owner.name.includes("n")){
        return elem
    }
}) 
console.log(findDomainIncN);


//(filter)

const equalDominToJob = domains.filter((elem)=>{
    if(elem.name.endsWith(".com")){
        let newElemName =elem.name.slice(0,-4)
        if(newElemName===elem.owner.job){
            console.log(elem);
        }
    }
})