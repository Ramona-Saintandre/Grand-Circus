class Calculator {
    add(...params) {
        // Default validation as true
        let isValid = true;

        // loop through the params
        // if one of them is not a number,
        // then set isValid = false
        params.forEach( param => {
            if ( typeof param !== 'number' ) {
                isValid = false;
            }
        })

        if ( !isValid ) {
            throw new Error("Can only use numbers, man");
        }

        return params.reduce((prev, cur) => prev + cur);
    }
}