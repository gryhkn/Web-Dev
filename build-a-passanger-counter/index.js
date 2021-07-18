// document.getElementById("count").innerText = 5

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalNumber = document.getElementById("total-nm")
let count = 0
let totNum = 0

console.log(saveEl)

function increment() {
    count = count + 1
    countEl.textContent = count
}


function save() {
    totNum += count
    let countStr = " " + count + " - "
    saveEl.textContent += countStr
    totalNumber.innerText = " Total number:  " + totNum
    count = 0
    countEl.textContent = count
}


























