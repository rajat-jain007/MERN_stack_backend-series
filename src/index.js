// require("dotenv").config({ path: "../.env" });
import dotenv from "dotenv";

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";

// We need to config the imported dotenv file.
dotenv.config({
  path: "/.env",
});

connectDB()
  .then(
    app.on("err", (err) => {
      console.log("ERROR", err);
      throw err;
    })
  )

  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })

  .catch((err) => {
    console.log("MONGO db Connectio failed!!!", err);
  });

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(() => {
      console.log(`App is listening in port ${process.env.PORT} `);
    });
  
} catch (error) {
    console.log("ERROR", error);
    throw error;
  }
})();
*/
