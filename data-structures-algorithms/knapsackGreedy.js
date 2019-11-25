/**
 * Example that shows how a greedy algorithm works great for some problems, but not so great for others
 */
const maxWeight = 25;

function knapsackGreedy() {
    var knapsack = [], canFitMore = true, knapsackWeight = 0;

    var items = new Map([
        // key: weight, value: cost
        [20, 30], [10, 9], [10,9], [10,9], [2, 3]
    ]);

    while( canFitMore === true ) {
        let highestValue = 0;

        for (var [weight, value] of items) {
            if ( value >= highestValue &&  ) {

            }
        }
    }
}

knapsackGreedy();