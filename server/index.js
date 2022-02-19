import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import bookRoutes from "./routes/books.js";

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

app.use('/books', bookRoutes);

const CONNECTION_URL = 'mongodb+srv://sushantsharma:sushant1994@cluster0.pwuas.mongodb.net/library';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

