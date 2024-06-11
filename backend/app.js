const MONGODB_URI =
  "mongodb+srv://admin:sprint8@sprint8.jvplwkl.mongodb.net/?retryWrites=true&w=majority&appName=Sprint8";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

const locationRoutes = require("./routes/locations");
app.use("/api/locations", locationRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
