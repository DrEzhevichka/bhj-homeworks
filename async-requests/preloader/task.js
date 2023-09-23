let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
let items = document.getElementById('items');
let loader = document.getElementById('loader');
xhr.addEventListener('readystatechange', function() {
    if (this.readyState == xhr.DONE && this.status == 200) {
        loader.classList.remove('loader_active');
        let data = JSON.parse(this.responseText).response.Valute;
        for (let valute in data) {
            items.innerHTML += `
                <div class="item">
                    <div class="item__code">${data[valute].CharCode}</div>
                    <div class="item__value">${data[valute].Value}</div>
                    <div class="item__currency">руб.</div>
                </div>
            `;
        }
    }
});