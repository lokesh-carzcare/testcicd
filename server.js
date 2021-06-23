const express = require('express');

const app = express();

// listen to requests
app.listen(4000, () => console.log(`server started on port`));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to test application." });
  });

module.exports = app;
