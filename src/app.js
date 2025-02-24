require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const cors = require("cors");
const bookingRoutes = require("./routes/bookingRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use(cors());

app.use("/bookings", bookingRoutes);
app.get("/test", (req, res) => {
  res.json({
    message: "Hello World!",
    timestamp: new Date().toISOString(),
  });
});

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
