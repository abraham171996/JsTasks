const body = document.querySelector("body");
const btns = document.querySelectorAll(".btn");


const changeBgColor = (color)=>{
    
    body.className ="";
    body.classList.add(color);
    
}

btns.forEach(btn=>btn.onclick=()=>{
    const color = btn.value;
    changeBgColor(color)
})