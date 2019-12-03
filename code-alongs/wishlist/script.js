"use strict"

{
    const wishListAddForm = document.querySelector('#wishlist-add');
    wishListAddForm.addEventListener('submit', e =>{
       e.preventDefault(); 

       const itemToAdd = document.querySelector('#item-to-add');
       const itemHTML = document.createElement('li');
       itemHTML.classList.add('list-item')
       console.log(itemToAdd.value);
    });
}