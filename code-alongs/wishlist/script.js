"use strict"
{
    const wishListAddForm = document.querySelector('#wishlist-add');

    wishListAddForm.addEventListener('submit', e => {
        e.preventDefault();

        const itemToAdd = document.querySelector('#item-to-add');

        if (itemToAdd.value && isNaN(itemToAdd.value)) {
            // <li></li>
            const itemHTML = document.createElement('li');

            // <li class="list-item"></li>
            itemHTML.classList.add('list-item');

            // <li class="list-item"> Text from the input in Here </li>
            itemHTML.innerText = itemToAdd.value;

            itemHTML.addEventListener('click', e => {
                itemHTML.classList.toggle('completed');
            });

            itemHTML.addEventListener('dblclick', e => {
                itemHTML.remove();
            });

            const wishList = document.querySelector('#wishlist');

            wishList.appendChild(itemHTML);
            itemToAdd.value = 'Pizza';
        }
    });
}