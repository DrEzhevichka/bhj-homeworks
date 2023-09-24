const editor = document.getElementById('editor');

editor.value = localStorage.getItem('textValue');
editor.addEventListener('keyup', () => {
    localStorage.textValue = editor.value;
});