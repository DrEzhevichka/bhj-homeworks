let signin = document.getElementById('signin');
let userId = document.getElementById('user_id');
let storedId = localStorage.getItem('user_id');
if (storedId) {
    signin.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = storedId;
}
let signinForm = document.getElementById('signin__form');
signinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(signinForm);
    xhr.responseType = 'json';
    xhr.send(formData);
    xhr.onload = function() {
            if (xhr.response.success) {
                signin.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                localStorage.setItem('user_id', xhr.response.user_id);
                userId.textContent = xhr.response.user_id;
                console.log(localStorage);
            } else {
                alert('Неверный логин/пароль');
                signinForm.reset();
            }
            return;
        }
});