const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact");

// Read
router.get("/", contactController.read);
router.get("/id/:id", contactController.readFromID);
router.get("/email/:email", contactController.readFromEmail);

// Create
router.post("/", contactController.create);
