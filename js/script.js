document.getElementById("burger2").addEventListener("click",function(){
    document.querySelector(".navbar").classList.toggle("open")
})

const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");

let first = document.getElementById("first")
let second = document.getElementById("second")

const result = document.getElementById("result");

let res = 0;

function calculus(mark) {
    const num1 = parseFloat(first.value) ||0;
    const num2 = parseFloat(second.value) ||0;
    switch(mark) {
        case "+":
            res = num1 + num2;
            break;
        case "-":
            res = num1 - num2;
            break;
        case "*":
            res = num1 * num2;
            break;
        case "/":
            res = num1 !== 0 ? num1 / num2 : "error";
            break;
    }
    result.textContent = res;
}

plus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("+");
})

minus.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("-");
})

mult.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("*");
})

div.addEventListener("click", (event) => {
    event.preventDefault()
    calculus("/");
})


const sinButton = document.getElementById("butsin");
const cosButton = document.getElementById("butcos");
const tanButton = document.getElementById("buttan");

const angleInput = document.getElementById("angle");
const trigResult = document.getElementById("trigResult");

function calculateTrig(func) {
    const angle = parseFloat(angleInput.value) || 0;
    const radians = angle * Math.PI / 180;
    let result;

    switch (func) {
        case "sin":
            result = Math.sin(radians);
            break;
        case "cos":
            result = Math.cos(radians);
            break;
        case "tan":
            result = Math.tan(radians);
            break;
    }
    trigResult.textContent = result.toFixed(4);
}

sinButton.addEventListener("click", (event) => {
    event.preventDefault();
    calculateTrig("sin");
});

cosButton.addEventListener("click", (event) => {
    event.preventDefault();
    calculateTrig("cos");
});

tanButton.addEventListener("click", (event) => {
    event.preventDefault();
    calculateTrig("tan");
});