const countryInput = document.getElementById('countryInput');
const regionSelect = document.getElementById('regionSelect');
const cardList = document.getElementById('cardList');
const details = document.getElementById('details');

let countriesData = [];

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        countriesData = data;
        searchCountries(countriesData);
    })
    .catch(error => console.error('Error fetching countries:', error));

function searchCountries(countries) {
    cardList.innerHTML = '';

    countries.forEach(country => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${country.flags.svg}" alt="국기">
            <h3>${country.name.common}</h3>
        `;
        card.addEventListener('click', () => showDetails(country));
        cardList.appendChild(card);
    });
}

function showDetails(country) {
    const languages = country.languages ? Object.values(country.languages).join(', ') : '정보 없음';
    const currencies = country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : '정보 없음';
    const timezones = country.timezones ? country.timezones.join(', ') : '정보 없음';

    details.innerHTML = `
        <h2>${country.name.common}</h2>
        <img src="${country.flags.svg}" alt="국기">
        <p><strong>인구:</strong> ${country.population.toLocaleString()}명</p>
        <p><strong>수도:</strong> ${country.capital ? country.capital[0] : '정보 없음'}</p>
        <p><strong>언어:</strong> ${languages}</p>
        <p><strong>통화:</strong> ${currencies}</p>
        <p><strong>시간대:</strong> ${timezones}</p>
    `;
}


countryInput.addEventListener('input', () => {
    filterCountries();
});


regionSelect.addEventListener('change', () => {
    filterCountries();
});


function filterCountries() {
    const searchTerm = countryInput.value.toLowerCase();
    const selectedRegion = regionSelect.value;

    const filtered = countriesData.filter(country => {
        const matchesName = country.name.common.toLowerCase().includes(searchTerm);
        const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
        return matchesName && matchesRegion;
    });

    searchCountries(filtered);
}
