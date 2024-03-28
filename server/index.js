require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const coins = require("./routes/coins.js");
const error = require("./middleware/error.js");

app.use(express.json());
app.use(cors());
app.use("/api/coins", coins);
app.use(error);

app.listen(process.env.PORT, () => {
  console.log("Listening on 3001");
});
