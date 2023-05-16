const input = document.querySelector("input");
const button = document.querySelector("button");
const circle = document.querySelector(".circle");
const length = document.querySelector(".length");
const area = document.querySelector(".area")
const pi = 3;
let empty = null


button.onclick = () => {
    if (input.value >= 10 && input.value <= 100) {
        circle.style.width = input.value + "px"

        circle.style.height = input.value + "px"
        const circleLengthFormula = 2 * pi * (input.value / 2);
        const areaFormula = pi * input.value / 2 * (input.value / 2);
        length.innerHTML = `Circle Length: ${circleLengthFormula} `
        area.innerHTML = `Circle Area: ${areaFormula}`
        input.value = empty
    }
    else{
        input.value=empty
    }
}

