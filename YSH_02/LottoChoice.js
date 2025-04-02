function generateLottoNumbers() {
    let numbers = new Set();
    while (numbers.size < 6) {
        let randomNum = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNum);
    }
    let lottoNumbers = Array.from(numbers).sort((a, b) => a - b);
  
    return lottoNumbers;
}
