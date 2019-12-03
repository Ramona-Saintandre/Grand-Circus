"use strict"

{
    const wishListAddForm = document.querySelector('#wishlist-add');
    wishListAddForm.addEventListener('submit', e =>{
       e.preventDefault(); 

       const itemToAdd = document.querySelector('#item-to-add');
       if (itemToAdd)
       // creating a <li>
       const itemHTML = document.createElement('li');

       itemHTML.classList.add('list-item');

       // <li class="list-item"> Text from the input in Here </li>
       itemHTML.innerText = itemToAdd.value;

       const wishlist = document.querySelector('wishlist');

       wishList.appendChild(itemHTML);

       console.log(itemToAdd.value);
    });
}