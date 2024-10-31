const script = require('./script')

describe('Add two numbers',() => {
    test('Both Positive Numbers',() => {
        expect(calculate(1,3)).toEqual(4);
    })
});