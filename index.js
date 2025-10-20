// Set up express
const express = require("express");
const app = express();
const port = 8000;

// Load the route handlers
const mainRoutes = require("./routes/main");
app.use('/', mainRoutes);

// HTTP requests
app.listen(port, () => console.log(`Node server is running on port ${port}...`));
