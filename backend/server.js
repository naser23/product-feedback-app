const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

// allows us to send raw JSON text
app.use(express.json());
// allows us to send url encoded text
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
