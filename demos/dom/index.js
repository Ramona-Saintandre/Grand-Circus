const nameOfUser = prompt('What is your name?');
const backgroundColor = prompt('Please enter a background color');

console.log(document.body.parentNode);
console.log(document.body.childNodes);

const paragraph = document.querySelector('p.row');
console.log(paragraph);
console.log(paragraph.innerHTML);

const name = document.querySelector('.name');
name.innerText = nameOfUser;

const background = document.querySelector('#background');
background.style.backgroundColor = backgroundColor;

const backgroundText = document.createElement('p');
backgroundText.textContent = `You selected ${backgroundColor}`;
background.append(backgroundText);

background.classList.add('background');

background.classList.add('background-row');
background.classList.remove('background');



