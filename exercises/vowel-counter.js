const vowelCounter = text => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for ( let char of text ){
        if ( vowels.includes(char.toLowerCase()) ) {
            vowelCount++;
        }
    }

    return vowelCount;
}

console.log(vowelCounter('vowelCounter'));
console.log(vowelCounter('BJ'));
console.log(vowelCounter('BJ Clark'));