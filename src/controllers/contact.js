const Contact = require("../models/contact");

module.exports = {
  // Create
  create: (req, res) =>
    Contact.create(req.body).then(contact => res.json(contact))
};
