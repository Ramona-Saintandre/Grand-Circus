"use strict"
{
    const button = document.querySelector('#clickable-button');

    console.log(button);
    button.addEventListener('click', event => {
        const button = event.target;

        const isClicked = event.dataset.clicked;

        if ( !isClicked || isClicked === 'false' ) {
            button.innerText = 'Clicked...';
            event.dataset.clicked = true;
        } else {
            button.innerText = 'Click Me!';
            button.dataset.clicked = false;
        }
    });
}