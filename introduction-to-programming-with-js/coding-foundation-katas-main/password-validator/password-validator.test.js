describe("Password Validator", function () {
  it("should test password ...", function () {
    const result = validatePassword("?a1b2c3d4!");
    chai.expect(result.valid).to.equal(true);
    chai.expect(result.reasons.length).to.equal(0);
  });

  it("should test password ...", function () {
    const result = validatePassword("!a1b2c3d4!");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(1);
    chai
      .expect(result.reasons.includes("duplicate special character"))
      .to.equal(true);
  });

  it("should test password ...", function () {
    const result = validatePassword("?ab18c3d4!");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(1);
    chai
      .expect(result.reasons.includes("consecutive character"))
      .to.equal(true);
  });

  it("should test password ...", function () {
    const result = validatePassword("?a12c3d4!9");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(1);
    chai.expect(result.reasons.includes("consecutive number")).to.equal(true);
  });

  it("should test password ...", function () {
    const result = validatePassword("?a2b2c3d4!");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(1);
    chai.expect(result.reasons.includes("duplicate number")).to.equal(true);
  });

  it("should test password ...", function () {
    const result = validatePassword("");
    chai.expect(result.valid).to.equal(false);
    chai.expect(result.reasons.length).to.equal(4);
    chai
      .expect(
        result.reasons.includes(
          "min length",

          "no character",
          "no number",
          "no special character"
        )
      )
      .to.equal(true);
  });

  // TODO: add your own tests here for all possible error messages (not combinations)

  // it("should test password ...", function () {
  // ...
  // });
});
