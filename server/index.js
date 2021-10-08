import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRouter from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/posts", postRouter);

const CONNECTION_URL =
  "mongodb+srv://chymbee:admin123@cluster0.o5rt2.mongodb.net/ContactList?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running at port: ${PORT}`))
  )
  .catch((error) => log.error(error));

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require("dotenv").config();
// //import routes
// const authRoutes = require("./routes/auth");
// const { db } = require("./model/User");
// //app
// const app = express();
// // db
// mongoose
//   .connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("DB Connected"));
// //middlewares
// app.use(bodyParser.json());
// app.use(cors());
// //routes middleware
// app.use("/api", authRoutes);
// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server is running on ${port}`);
// });
