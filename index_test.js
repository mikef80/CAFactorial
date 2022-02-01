var assert = require("assert");
var Calculate =  require('./index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('tests if output of 5! is equal to 120', () => {
      const expectedResult = 120;
      const input = 5;

      const exercise = Calculate.factorial(input);

      assert.equal(exercise, expectedResult);
    }) 

    it('tests if output of 3! is equal to 6', () => {
      const expectedResult = 6;
      const input = 3;

      const exercise = Calculate.factorial(input);

      assert.equal(exercise, expectedResult);
    })

    it('returns 1 when input argument is 0', () => {
      const expectedResult = 1;
      const input = 1;

      const exercise = Calculate.factorial(input);

      assert.equal(exercise, expectedResult);
    })
  });
});