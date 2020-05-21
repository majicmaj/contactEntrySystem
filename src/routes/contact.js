const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact");

// Read
router.get("/", contactController.read);
router.get("/id/:id", contactController.readFromID);
router.get("/email/:email", contactController.readFromEmail);

// Create
router.post("/", contactController.create);

// Update
router.put("/id/:id", contactController.updateFromID);
router.put("/email/:email", contactController.updateFromEmail);

// Delete
router.delete("/id/:id", contactController.deleteFromID);
router.delete("/email/:email", contactController.deleteFromEmail);

module.exports = router;
