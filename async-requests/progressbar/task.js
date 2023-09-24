const progress = document.getElementById('progress');
const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total;
    };
    xhr.send(formData);
});