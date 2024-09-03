const countNumber = document.getElementById("countNumber");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

let i = 0
decrease.addEventListener(`click`, decreaser)


function decreaser() {
    countNumber.innerHTML = --i
}



reset.addEventListener(`click`, reseter)

function reseter() {
    countNumber.innerHTML = 0
    i = null
}




increase.addEventListener(`click`, increaser)


function increaser() {
    countNumber.innerHTML = ++i
}