"use strict";

const buttons = document.querySelectorAll('.show-display');
const resultBox = document.querySelector('.container').querySelector('.result').querySelector("#result-box");
document.getElementsByClassName('equal')[0].addEventListener('click', calculate);
document.getElementsByClassName('all-clear')[0].addEventListener('click', clearAll);
document.getElementsByClassName('clear-last')[0].addEventListener('click', clearLast);

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

function clearAll() {
    resultBox.innerHTML = 0;
}

function clearLast() {
    const answer = resultBox.innerHTML;
    const lengthh = answer.length;
    if(lengthh === 1){
       return resultBox.innerHTML = 0;
    }else {
         resultBox.innerHTML =  answer.substring(0, lengthh-1);
    }
}