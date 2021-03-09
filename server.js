const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoute = require("./routes/auth");
const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use("/api/", authRoute);
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server Is Running On " + PORT);
});
