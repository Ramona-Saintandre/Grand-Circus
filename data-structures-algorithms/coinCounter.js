class CoinCounter {
    /**
     * Denominations in cents
     */
    getDenominations() {
        return [1, 5, 10 , 25, 100];
    }

    /**
     * Convert money results in plain english
     * @param Map money
     */
    convertToEnglish(money) {
        const moneysInEnglish = {
            '1.00': '<strong>Dollar</strong> make me holla',
            '0.25': '<strong>Quarter</strong> life crisis',
            '0.10': 'You a <strong>Dime</strong>',
            '0.05': '<strong>Nickel</strong>back sux',
            '0.01': '<strong>Penny</strong> for your thoughts'
        }

        return moneysInEnglish[money] || money;
    }

    /**
     * Get total amount of coins in counter
     *
     * @returns string
     */
    getAmounts() {
        let amountsInEnglish = '';

        this.result.forEach( function(amount, money) {
            amountsInEnglish += `<p>${amount} ${counter.convertToEnglish(money)}</p>`;
        });

        return amountsInEnglish;
    }

    /**
     * Set HTML display of total amounts
     */
    setAmounts() {
        document.getElementById('display').innerHTML = this.getAmounts();
    }

    /**
     * Use Greedy algorithm to get least number of coinage you need to make change
     * @param {*} total
     */
    makeChange(total) {
        if (typeof total === 'undefined' ) {
            total = document.getElementById('amount').value;
        }

        // 1) Initialize result as empty.
        this.result = new Map();

        // 2) find the largest denomination that is
        //    smaller than V.
        // We're sorting so we know we're starting with the optimal solution
        let denominations = this.getDenominations().sort(function(a, b){return b - a});

        while( total > 0 ) {
            for (let index = 0; index < denominations.length; index++) {
                const moneys = (denominations[index] / 100).toFixed(2);

                if ( moneys <= total ) {
                    this.result.set(moneys,  this.result.has(moneys) ? (this.result.get(moneys) + 1) : 1);
                    total = (total - moneys).toFixed(2);
                    break;
                }
            }
        }

        return this.result;
    }

    displayChange() {
        // Get input
        let total = document.getElementById('amount').value;
        this.makeChange(total);

        // Set HTML of response
        this.setAmounts();
    }
}

const counter = new CoinCounter();



