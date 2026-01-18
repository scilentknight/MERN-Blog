import dotenv from "dotenv/config";
import { app } from "./app.js";
import { connectDB } from "./config/db.js"

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("MongoDb connection failed.");
  });
