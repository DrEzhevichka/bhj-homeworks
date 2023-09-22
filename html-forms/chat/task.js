let chatWidget = document.querySelector('.chat-widget');
chatWidget.addEventListener('click', function() {
    chatWidget.classList.add('chat-widget_active');
});
chatWidget.addEventListener('keydown', function(event) {
    if (event.code === 'Enter') { 
       answers();
    }  
});

let botMessage = [
    'Добрый день! До свидания!',
    'Где ваша совесть?',
    'Кто тут?',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
    'Мы ничего не будем вам продавать!',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
];

let chatWidgetMessages = document.querySelector('.chat-widget__messages');
let chatWidgetInput = document.querySelector('.chat-widget__input');
let date = new Date();

function answers() {    
chatWidgetMessages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">${event.target.value}</div>
        </div>
    `;
chatWidgetInput.value = '';
let random = Math.floor(Math.random() * botMessage.length);
chatWidgetMessages.innerHTML += `
        <div class="message">
            <div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
            <div class="message__text">${botMessage[random]}</div>
        </div>
    `;
}