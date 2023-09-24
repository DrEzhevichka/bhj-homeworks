let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();
console.log(xhr);
let pollTitle = document.getElementById('poll__title');
let pollAnswers = document.getElementById('poll__answers');
xhr.onload = function () {
    if(xhr.readyState === 4) {
        pollTitle.innerText = xhr.response.data.title;
        let answers = xhr.response.data.answers;
        for (let answer of answers) {
            pollAnswers.insertAdjacentHTML('afterBegin', `<button class="poll__answer">${answer}</button>`);
        }
        let button = document.getElementsByClassName('poll__answer');
        for (let btn of button) {
            btn.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
        }
    }
}