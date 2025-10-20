// Create a new router
const express = require("express");
const router = express.Router();

// Home page
router.get("/", (req, res) => res.send("Hello World!"));

// About page
router.get("/about", (req, res) => res.send("<h1>This is the about page</h1>"));

// Contacts page
router.get("/contact", (req, res) => res.send("<h1>Contact me at: lokel001@gold.ac.uk</h1>"));

// Date and time
router.get("/date", (req, res) => {
    const now = new Date();
    res.send(`<h1>Current date and time: ${now}</h1>`);
});

// Export the router object so index.js can access it
module.exports = router;