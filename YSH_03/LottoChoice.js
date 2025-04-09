let buttons2 = document.getElementsByClassName("button-2")[0];
let buttons1 = document.getElementsByClassName("button-1")[0];
let quantity = document.getElementsByClassName("text-wrapper-9")[0];
let totalAmountElem = document.getElementsByClassName("text-wrapper-3")[0];

let myNumbers = [];

let winningBalls = [
    document.getElementsByClassName("background-7")[0].getElementsByClassName("text-wrapper-2")[0],
    document.getElementsByClassName("background-8")[0].getElementsByClassName("text-wrapper-2")[0],
    document.getElementsByClassName("background-9")[0].getElementsByClassName("text-wrapper-2")[0],
    document.getElementsByClassName("background-10")[0].getElementsByClassName("text-wrapper-2")[0],
    document.getElementsByClassName("background-11")[0].getElementsByClassName("text-wrapper-2")[0],
    document.getElementsByClassName("background-12")[0].getElementsByClassName("text-wrapper-2")[0]
];


let myBalls = [
    document.getElementsByClassName("background-13")[0].getElementsByClassName("text-wrapper-2")[0],
    document.getElementsByClassName("background-14")[0].getElementsByClassName("text-wrapper-2")[0],
    document.getElementsByClassName("background-15")[0].getElementsByClassName("text-wrapper-2")[0],
    document.getElementsByClassName("background-16")[0].getElementsByClassName("text-wrapper-2")[0],
    document.getElementsByClassName("background-17")[0].getElementsByClassName("text-wrapper-2")[0],
    document.getElementsByClassName("background-18")[0].getElementsByClassName("text-wrapper-2")[0]
];


let resultText = document.getElementsByClassName("text-wrapper-7")[0];

function generateLottoNumbers() {
    let numbers = new Set();
    while (numbers.size < 6) {
        let random = Math.floor(Math.random() * 45) + 1;
        numbers.add(random);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function updateBalls(ballElements, numbers) {
    for (let i = 0; i < 6; i++) {
        ballElements[i].textContent = String(numbers[i]);
    }
}

function checkMatches(winning, my) {
    let matchCount = 0;
    for (let i = 0; i < 6; i++) {
        if (winning.includes(my[i])) {
            matchCount++;
        }
    }
    return matchCount;
}

function lottoResult() {
    let winningNumbers = generateLottoNumbers();

    updateBalls(winningBalls, winningNumbers);

    displayResult(winningNumbers, myNumbers);
}

function displayResult(winning, my) {
    let matchCount = checkMatches(winning, my);
    resultText.textContent = "결과: " + matchCount + "개 일치" + (matchCount >= 6 ? " - 당첨!" : "");
}


function quantityandBalls() {
    let current = parseInt(quantity.textContent);
    myNumbers = generateLottoNumbers();

    if (isNaN(current)) {
        current = 0;
    }

    let newQuantity = current + 1;
    quantity.textContent = String(newQuantity);

    let totalAmount = newQuantity * 1000;
    totalAmountElem.textContent = "총 금액: " + totalAmount + "원 (1장당 1,000원)";

    updateBalls(myBalls, myNumbers);
}


buttons2.addEventListener("click", lottoResult);
buttons1.addEventListener("click", quantityandBalls);
