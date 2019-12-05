const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const checked = document.querySelector('input[name="type"]:checked');
    console.log(checked);

    const value = checked.value;
    console.log(value);
})