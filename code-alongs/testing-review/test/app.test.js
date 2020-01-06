describe('calculator', () => {
    it('1 + 1 = 2', () => {
        const calculator = new Calculator();

        let result = calculator.add(1,1); // 2
        expect(result).toEqual(2);
    });

    it('1 + -1 = 0', () => {
        const calculator = new Calculator();

        let result = calculator.add(1,-1); // 2
        expect(result).toEqual(0);
    });

    it('-1 + -1 = -2', () => {
        const calculator = new Calculator();

        let result = calculator.add(-1,-1); // 2
        expect(result).toEqual(-2);
    });

    it('99999 + 9123 = 109122', () => {
        const calculator = new Calculator();

        let result = calculator.add(99999, 9123); // 2
        expect(result).toEqual(109122);
    });

    it('1 + 2 + 3 = 6', () => {
        const calculator = new Calculator();

        let result = calculator.add(1, 2, 3); // 2
        expect(result).toEqual(6);
    });

    it('1 + 2 + 3 + 4 = 10', () => {
        const calculator = new Calculator();

        let result = calculator.add(1, 2, 3, 4); // 2
        expect(result).toEqual(10);
    });

    it('Can only pass in numbers', () => {
        const calculator = new Calculator();

        expect(() => calculator.add('1', false, Number)).toThrowError("Can only use numbers, man"); // 2).toEqual(10);;
    });

    it('Can only pass in numbers part 2', () => {
        const calculator = new Calculator();

        expect(() => calculator.add('$', 'jfdslksadjfl', 'Ê')).toThrowError("Can only use numbers, man"); // 2).toEqual(10);;
    });

    it('Adding decimals. WTF', () => {
        const calculator = new Calculator();

        expect(calculator.add(1.5, .5)).toEqual(2);
    });
});