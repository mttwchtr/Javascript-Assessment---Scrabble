describe('getScore', function() {
  it("takes a letter and returns the correct score", function() {
    getScore("A").should.equal(1);
  });
  
  it("works with upper and lowercase submissions", function() {
    getScore("Aa").should.equal(2);
  });

  it("returns an error message if non-letter symbol is entered", function() {
    getScore("??$c?#Sdcf}").should.equal("Please enter only letters");
  });

  it("returns an error message for multiple words", function() {
    getScore("this is sparta").should.equal("Please enter only letters");
  });

  it("trims beginning and trailing spaces", function() {
    getScore("  cake  ").should.equal(10);
  });

  it("works correclty for each letter", function() {
    getScore("abcdefghijklmnopqrstuvwxyz").should.equal(87);
  });
});