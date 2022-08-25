const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express(); 

app.use("/api/recipie", require("./routes/recipieRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));