const numbers = document.querySelectorAll('.num-btn');
const resultBox = document.querySelector('.container').querySelector('.result').querySelector("#result-box");

numbers.forEach(items => {
    items.addEventListener('click', showNumbers)
})

function showNumbers(event) {
    const num = event.target.innerText;
    if (resultBox.innerHTML === 0) {
        return resultBox.innerHTML = num;
    }
        
}