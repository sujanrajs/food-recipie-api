const express = require("express");
require("colors");
require("dotenv").config();
const { json, urlencoded } = require("body-parser");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const recipieRouter = require("./routes/recipieRoutes");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/api/recipies", recipieRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
