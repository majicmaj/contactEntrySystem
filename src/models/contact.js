const mongoose = require("../db/connection");

const ContactSchema = new mongoose.Schema({
  name: {
    first: String,
    middle: String,
    last: String
  },
  address: {
    street: String,
    city: String,
    state: String,
    zip: String
  },
  phone: [
    {
      number: String,
      type: {
        type: String,
        enum: ["home", "work", "mobile"]
      }
    }
  ],
  email: String
});

module.exports = mongoose.model("Contact", ContactSchema);
