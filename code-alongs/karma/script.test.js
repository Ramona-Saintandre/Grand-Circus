// describe contains a suite of tests for a certain feature or unit
describe("answer", function() {
    // each test case is an `it`. You can have multiple of these.
    // The string here is only for humans to read; it does not affect the test.
    it("to life the universe and everything", function() {
      // Call the function we want to test and check the result.
      expect(answer()).toEqual(42);
    });

        // each test case is an `it`. You can have multiple of these.
    // The string here is only for humans to read; it does not affect the test.
    it("to life the universe and everything", function() {
        // Call the function we want to test and check the result.
        expect(answer()).toEqual(42);
      });
  })