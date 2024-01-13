
const express = require("express");
const bodyParser = require("body-parser");
const cors= require("cors");
const parentMenuRoutes = require("./Routes/parentMenuRoutes");
const submenuRoutes = require("./Routes/submenuRoutes");
const { connection } = require("./Config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.port || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/parent-menu", parentMenuRoutes);
app.use("/submenu", submenuRoutes);

// Start the server
app.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.log({ success: false, msg: error });
  }
});
