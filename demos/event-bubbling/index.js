"use strict"
{
    document.addEventListener('click', () => {
        alert('there was a click');
    })

    const ul = document.querySelector('ul');
    ul.addEventListener( 'click', e => {
        // Prevent bubbling...
        e.stopPropagation();
        alert('ul was clicked!!!');
    });

    for(let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.innerText = `Item #${i + 1}`;

        li.addEventListener( 'click', e => {
            alert('li was clicked!!!');
        });

        ul.appendChild(li);
    }
}