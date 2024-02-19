import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    const port = process.env.PORT || 5000;
    app.on("error", (error) => {
      console.log("EXPRESS ERROR :", error);
    });
    app.listen(port, () => {
      console.log(`⚙ Server is running at port : ${port}`);
    });
  })
  .catch((error) => {
    console.log("\n MONGODB connection failed !!!", error);
  });
