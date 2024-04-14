const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/form-data", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log("database connected");
  })

const formDataSchema = new mongoose.Schema({
  gender: String,
  score1: Number,
  score2: Number,
  score3: Number,
});

const FormData = mongoose.model("FormData", formDataSchema);

app.post("/submit-form", (req, res) => {
  const { gender, score1, score2, score3 } = req.body;

  const formData = new FormData({
    gender,
    score1,
    score2,
    score3,
  });

  formData
    .save()
    .then(() => {
      console.log("Form data saved successfully");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
});
app.get("/get-form-data", (req, res) => {
  FormData.find()
  .then((data) => {
  res.send(data);
  })
  .catch((error) => {
  console.error(error);
  res.sendStatus(500);
  });
  });

app.listen(3001, () => {
  console.log("Server running on port 3001");
});


