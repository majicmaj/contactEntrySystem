const mongoose = require("mongoose");
const ContactModel = require("../models/contact");
const ContactData = {
  name: {
    first: "Harold",
    middle: "Francis",
    last: "Gilkey"
  },
  address: {
    street: "8360 High Autumn Row",
    city: "Cannon",
    state: "Delaware",
    zip: "19797"
  },
  phone: [
    {
      number: "302-611-9148",
      type: "home"
    },
    {
      number: "302-532-9427",
      type: "mobile"
    }
  ],
  email: "harold.gilkey@yahoo.com"
};

describe("Contact Model Test", () => {
  beforeAll(async () => {
    await mongoose.connect(
      global.__MONGO_URI__,
      { useNewURLParser: true },
      err => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      }
    );
  });
});
