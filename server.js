const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000
const app = express();
// Parse body as JSON
const db = require("./models");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static content from "public" directory
app.use(express.static("public"));
// Mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
// routes
app.use(require("./routes/api.js"));
// app.use(require("./routes/html.js"));
require("./routes/html.js")(app)

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});
