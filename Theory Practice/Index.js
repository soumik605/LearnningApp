import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import Routes from "./Router/myRoute.js";
import cors from "cors";

const PORT = process.env.PORT || 8000;
const app = express();
const url = "mongodb://localhost:27017/LanguageDB";

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(Routes);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`listening... ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error : ", err.message);
  });
