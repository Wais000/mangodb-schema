import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postsRoutes from "./routes/postsRoutes.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();
/* const CONNECTION_URL =
  "mongodb+srv://wais:Waisuddin1@cluster0.rdpa7.mongodb.net/record-shop?retryWrites=true&w=majority" */;

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello world!");
});
app.use("/posts", postsRoutes);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Database connected and server running on port: `, PORT),
    ),
  )
  .catch((error) => console.log(error));
