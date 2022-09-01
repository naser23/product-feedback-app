const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();

// allows us to send raw JSON text
app.use(express.json());
// allows us to send url encoded text
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

// Routes
app.use("/users", require("./routes/userRoutes"));

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
