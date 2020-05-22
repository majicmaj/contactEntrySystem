const assert = require("assert");
const Contact = require("../models/contact");
const testcase = require("./testcase.json");

describe("Creating contact", () => {
  it("creates a contact", done => {
    const cont = new Contact({ testcase });
    cont.save().then(() => {
      assert(!cont.isNew);
      done();
    });
  });
});
