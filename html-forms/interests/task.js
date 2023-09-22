const interestCheck = document.querySelectorAll('.interest__check');
for (let i = 0; i < 4; i = i + 3) {
    interestCheck[i].addEventListener('change', function() {
	    if (interestCheck[i].checked) {
            interestCheck[i + 1].checked = true;
            interestCheck[i + 2].checked = true;
	    } else {
            interestCheck[i + 1].checked = false;
            interestCheck[i + 2].checked = false;
        }
    });
}