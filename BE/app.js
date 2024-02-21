const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { bookRoute } = require("./src/routes/book.route");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use("/api/v1/books", bookRoute);

app.listen(8080, () => {
  console.log("server is running");
});
