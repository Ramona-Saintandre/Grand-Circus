"use strict"
{
    class Purchase {
        constructor(price, name, category) {
            this.price = Number.parseFloat(price || 0);
            this.category = category;
            this.name = name;
        }
    }

    class Category {
        constructor(name, color) {
            this.name = name;
            this.color = color;
        }
    }

    class BudgetBuddy {
        constructor(budget = 1000) {
            this.budget = budget;
            this.remaining = budget;
            this.purchases = [new Purchase(20, 'Pizza', 'Food')];

            this.categories = [new Category('General', this.getRandomColor())];

            window.addEventListener('load', _ => {
                this.updateDom();
                this.addFormSubmit();
            });
        }

        handlePurchaseSubmit = (e) => {
            const category = e.target.dataset.category;
            e.preventDefault();

            const $input = document.querySelector(`#purchases-${category} .item-add`);

            const $name = document.querySelector(`#purchases-${category} .name-add`);

            this.addPurchase($input.value, $name.value, category);
        }

        addFormSubmit() {
            document.querySelector('#update-budget').addEventListener('submit', (e) => {
                e.preventDefault();

                const $input = document.querySelector('#budget');

                this.budget = Number.parseFloat($input.value);
                this.updateDom();
            });
        }

        addPurchase(price, name, category = 'Miscellaneous') {
            this.purchases.push(new Purchase(price, name, category));
            this.updateDom();
        }

        loadCategories() {
            const element = document.getElementById('purchase-categories');
            element.innerHTML = '';

            this.categories.forEach( (category, catIndex) => {
                const $category = document.createElement('section');
                $category.innerHTML = `<h2>${category.name}</h2>`;
                $category.id = 'purchases-' + category.name;

                $category.appendChild(document.createElement('ul'));

                const color = category.color;

                $category.style.backgroundColor = color.color;
                $category.classList.add(color.mode);

                const form = document.createElement('form');

                form.dataset.category = category.name;

                // Reset HTML
                form.innerHTML = `
                   <!-- <h4> Add a new Expense </h4> -->
                    <p>
                        <label>
                            Name
                            <input class="name-add" />
                        </label>
                    </p>

                    <p>
                        <label>
                            Price
                            <input class="item-add" type="number" step="0.01" />
                        </label>
                    </p>
                    <p>
                        <button>Submit</button>
                    </p>
                `;

                form.addEventListener('submit', this.handlePurchaseSubmit);

                $category.appendChild(form);

                const removeCategoryButton = document.createElement('a');
                removeCategoryButton.innerText = 'Remove Category';

                removeCategoryButton.addEventListener('click', e => {
                    e.preventDefault();

                    this.categories.splice(catIndex, 1);

                    this.updateDom();
                })

                $category.appendChild(removeCategoryButton);

                element.append($category);

            });

            const section = document.createElement('section');
            const addCategoryForm = document.createElement('form');

            addCategoryForm.innerHTML = `
                <label>
                    Add Category
                  <input id="add-category" />
                </label>

                <button>Submit</button>
            `;

            addCategoryForm.addEventListener( 'submit', e => {
                e.preventDefault();

                const value = document.querySelector('#add-category').value;

                this.categories.push(new Category(value, this.getRandomColor()));

                this.updateDom();
            });

            section.appendChild(addCategoryForm);
            element.appendChild(section);
        }

        /**
         * Return whether a color is light or dark
         *
         * @param {*} color
         */
        lightOrDark(color) {

            // Variables for red, green, blue values
            var r, g, b, hsp;

            // Check the format of the color, HEX or RGB?
            if (color.match(/^rgb/)) {

                // If HEX --> store the red, green, blue values in separate variables
                color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

                r = color[1];
                g = color[2];
                b = color[3];
            }
            else {

                // If RGB --> Convert it to HEX: http://gist.github.com/983661
                color = +("0x" + color.slice(1).replace(
                color.length < 5 && /./g, '$&$&'));

                r = color >> 16;
                g = color >> 8 & 255;
                b = color & 255;
            }

            // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
            hsp = Math.sqrt(
            0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b)
            );

            // Using the HSP value, determine whether the color is light or dark
            if (hsp>127.5) {

                return 'light';
            }
            else {

                return 'dark';
            }
        }

        /**
         * Get a randomly generated color
         *
         * return hex code
         */
        getRandomColor() {
            const randomNumber = Math.floor(Math.random()*16777215);
            let color = '#'+(  randomNumber ).toString(16);

            let mode = this.lightOrDark(color);

            if ( color.length < 7 ) {
                color = '#000000';
                mode = 'dark';
            }

            return {
                color,
                mode
            };
        }

        /**
         * Refresh generated elements in the DOM
         *
         * This can be run any time there's a change in data
         */
        updateDom() {
            this.loadCategories();
            this.updateBudget();
            this.updateRemaining();
            this.updatePurchases();
        }

        /**
         * Add ability to delete purchase by the class
         */
        addDeleteButtons() {
            const buttons = document.querySelectorAll('.delete-puchase');

            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const index = button.dataset.index;

                    this.purchases.splice(index, 1);
                    this.updateDom();
                });
            });
        }

        /**
         * Get number of days left in the month
         */
        getDaysLeftInMonth() {
            const date = new Date();
            const time = new Date(date.getTime());
            time.setMonth(date.getMonth() + 1);
            time.setDate(0);
            const days =time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;

            return days;
        }

        /**
         * Refresh list of transactions inside of each category column
         */
        updatePurchases() {
            this.purchases.forEach((purchase, index) => {
                let category = purchase.category;

                if (!this.categories.includes(category)) {
                    category = 'General';
                }

                const purchases = document.querySelector('#purchases-' + category + ' ul');

                const $purchase = document.createElement('li');
                $purchase.innerHTML = `<span class="cost">${purchase.name} <strong>${this.convertCurrency(purchase.price)}</strong></span>
                <button class="delete-puchase" data-index="${index}">X</button>`;
                purchases.appendChild($purchase);
            });

            this.addDeleteButtons();
        }

        convertCurrency(amount) {
            return "$" + amount.toFixed(2);;
        }

        getBudget() {
            return this.convertCurrency(this.budget);
        }

        getRemaining() {
            let remaining = this.budget;

            this.purchases.forEach((purchase) => {
                remaining -= purchase.price;
            })

            this.remaining = remaining;

            return this.convertCurrency(remaining);
        }

        updateBudget = () => {
            document.querySelector('#budget-display').max = this.budget;
            this.updateBySelector('.budget-placeholder', this.getBudget())
        }

        updateRemaining = () => {
            this.updateBySelector('.remaining-placholder', this.getRemaining());
            document.querySelector('#budget-display').value = this.remaining;

            this.updateBySelector('.days-remaining-placeholder', this.getDaysLeftInMonth());
        }

        updateBySelector(selector, value) {
            const $elements = document.querySelectorAll(selector);
            for (const $element of $elements) {
                $element.innerText = value;
            }
        }

    }

    new BudgetBuddy();
}