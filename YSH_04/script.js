function searchCountry() {
    const countryName = document.getElementById('countryInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (countryName === "") {
        resultDiv.innerHTML = "나라 이름을 입력하세요.";
        return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("나라를 찾을 수 없습니다.");
            }
            return response.json();
        })
        .then(data => {
            const country = data[0];
            const flagUrl = country.flags.svg;
            const capital = country.capital ? country.capital[0] : "수도 정보 없음";

            resultDiv.innerHTML = `
                <h2>${country.name.common}</h2>
                <img src="${flagUrl}" alt="국기">
                <p><strong>수도:</strong> ${capital}</p>
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = error.message;
        });
}
