"use strict" {
    const button = document.querySelector('#clickable-button');
    let buttonText;
    console.log(button);
    button.addEventListener('click', event => {
        const button = event.target;

        const isClicked = event.dataset.clicked;

        if (!isClicked || isClicked === 'false') {
            buttonText = button.innerText;

            button.innerText = 'Clicked...';
            event.dataset.clicked = true;
        } else {
            button.innerText = buttonText;
            button.dataset.clicked = false;
        }
    });
}