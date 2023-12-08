const express = require("express");
const { json, urlencoded } = require("express");
const { config } = require("dotenv");
const otpRoutes = require("./routes/otpRoutes");

const app = express();
config();
const port = process.env.PORT;

app.use(json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/auth", otpRoutes);

app.listen(port || 3000, function () {
  console.log("server is running on port 3001");
});
