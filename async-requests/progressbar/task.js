const progress = document.getElementById('progress');
const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.onprogress = function(event) {
        progress.value = event.loaded / event.total;
    };
    xhr.send(formData);
});