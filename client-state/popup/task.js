let subscribeModal = document.getElementById('subscribe-modal');
window.onload = () => {
    if (!getCookie('closed')) {
        subscribeModal.classList.add('modal_active');
    }
}
let modalClose = subscribeModal.querySelector('.modal__close');
modalClose.onclick = () => {
    subscribeModal.classList.remove('modal_active');
    document.cookie = 'closed=true'
}
function getCookie(item) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(item + '='));
    if (cookie) {
        return cookie.slice(item.length + 1);
    }
}