import Express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import { mongoUrl } from "./Config/config.js";
import routes from "./Routes/Routes.js";

dotenv.config();

const app = Express();

const PORT = process.env.PORT;

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(bodyParser.json({limit: '50mb'}));

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use("/api", routes);

const databaseConnetion = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedtopology: true,
  }
  try {
    mongoose.connect(mongoUrl, connectionParams);
    console.log("Database Conneted Successfully");
  } catch (error) {
    console.log(error);
    console.log("Database Connetion Failed");
  }
}

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});

databaseConnetion();
