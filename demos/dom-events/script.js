"use strict"
{
    const button = document.querySelector('#clickable-button');
    let buttonText;

    const buttonHandler = event => {

        const button = event.target;

        const isClicked = button.dataset.clicked;

        if ( !isClicked || isClicked === 'false' ) {
            buttonText = button.innerText;

            button.innerText = 'Clicked...';
            button.dataset.clicked = true;
        } else {
            button.innerText = buttonText;
            button.dataset.clicked = false;
        }
    }
    button.addEventListener('click', buttonHandler);

    const stopClickButton = document.querySelector('#stop-clicking');
    stopClickButton.addEventListener('click', () => {
      button.removeEventListener('click', buttonHandler);
      button.addEventListener('click', () => {
          alert('STOP CLICKING THE BUTTON');
      })
    })
}