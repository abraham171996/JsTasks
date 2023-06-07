const img = document.querySelector("img")
const div = document.querySelector('div')
const btn = document.querySelector("button")
img.addEventListener("click",()=>{
    div.style.display = "block"
})

btn.addEventListener("click",()=>{
    div.style.display = "none"
})