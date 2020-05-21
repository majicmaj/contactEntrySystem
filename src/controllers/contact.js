const Contact = require("../models/contact");

module.exports = {
  // Create
  create: (req, res) =>
    Contact.create(req.body).then(contact => res.json(contact)),
  // Read
  read: (req, res) => Contact.find({}).then(contact => res.json(contact)),
  readFromID: (req, res) =>
    Contact.find({ _id: req.params.id }).then(contact => res.json(contact)),
  readFromEmail: (req, res) =>
    Contact.find({ email: req.params.email }).then(contact =>
      res.json(contact)
    ),
  // Update
  updateFromID: (req, res) =>
    Contact.findOneAndUpdate({ _id: req.params.id }.req.body).then(contact =>
      res.json(contact)
    ),
  updateFromEmail: (req, res) =>
    Contact.findOneAndUpdate({ email: req.params.email }.req.body).then(
      contact => res.json(contact)
    )
};
