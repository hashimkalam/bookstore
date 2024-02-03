import express from "express";
import mongoose from "mongoose";
import { PORT, mongodbURL } from "./config.js";

import cors from "cors";

import booksRoute from "./routes/booksRoute.js";

const app = express();

// cors policy
app.use(cors());

app.use(
  cors({
    origin: ["bookstore-vtgk.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

// middleware for parsing req body
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);

  return res.status(234).send("Hi i am hashim");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
