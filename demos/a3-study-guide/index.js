/*
    Call a function when a button is clicked
*/
function hello(e) {
    // Prevent normal functionality
    e.preventDefault();

    const clicker = e.target; // the element that triggered the click
}
// Create an event listener
const element = document.querySelector('#hello');
element.addEventListener('click', hello);

// or
// Attach an “onclick” attribute to an element in the HTML code
<a id="hello" onclick="hello()"></a>

/*
    Change the CSS style of a DOM element
*/
const element = document.querySelector('#hello');
element.style.backgroundColor = 'red'; // note: camel case instead of dashes

/*
    Create an element with specific attributes
*/
const element = document.createElement();
element.id = 'hello'; // add attributes in the same way you would any object
element.classList.add('button'); // classess have their own functionality for .add and .remove .toggle
element.title = 'Say hello';
element.dataset.clickable = '1234'; // dataset is special, HTML becomes data-clickable="1234"

/*
    Remove an element from the DOM
*/
element.remove(); // it's that easy

/*
    Append new elements to an existing DOM element
*/
element.appendChild(node);