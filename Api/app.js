const div = document.querySelector("div")
const p = document.querySelector("ul")
const contactList = document.createElement("li")
const contactList1 = document.createElement("li")
//Api

//random food recipe 
const url = `https://www.themealdb.com/api/json/v1/1/random.php`
//meal name

axios.get(url).
then((res)=>{
    res.data.meals.forEach(element => {
       div.appendChild(contactList)
       contactList.innerHTML = `${element.strMeal}`
       

    });
})


//Star Wars Api

//People

const starWarsUrl = `https://www.swapi.tech/api/people/`
let empty = []
axios.get(starWarsUrl).
then((respons)=>{
    respons.data.results.forEach((elem) => {
        
        
        empty.push(elem.name)
        
        p.append(contactList1)
        
       contactList1.innerHTML = `${[...empty]}`
      console.log(...empty);
       
    });
    
})