"use strict";

const buttons = document.querySelectorAll('.show-display');
const resultBox = document.querySelector('.container').querySelector('.result').querySelector("#result-box");
document.getElementsByClassName('equal')[0].addEventListener('click', calculate);

buttons.forEach(items => {
    items.addEventListener('click', showNumbers)
})

function showNumbers(event) {
    const num = event.target.innerText;
    if (resultBox.innerHTML == 0) {
       resultBox.innerHTML = num;
    } else {
        resultBox.innerHTML += num;
    }
        
}

function calculate() {
    const result = resultBox.innerHTML;
    resultBox.innerHTML =  eval(result);
}