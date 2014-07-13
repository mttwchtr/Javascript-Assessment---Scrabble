describe('wordCount', function() {
  it("returns input if input is one word", function() {
    wordCount("hello").should.eql([[1,"hello"]]);
  });

  it("returns both words if input is two words", function() {
    wordCount("world hello World").should.eql([[2,"world"],[1,"hello"]]);
  });

  it("returns words in order of number of instances if more than two words are submitted", function() {
    wordCount("hello fun fun times hello").should.eql([[2,"hello"],[2,"fun"],[1,"times"]]);
  });

});
