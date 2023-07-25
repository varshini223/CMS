import morgan from "morgan";
import * as dotenv from 'dotenv';
dotenv.config();

const logger = morgan("combined");

const mongoUrl = `mongodb+srv://${process.env.DB_userName}:${process.env.DB_password}@cms.mbufxzv.mongodb.net/${process.env.DB_name}?retryWrites=true&w=majority`;

export { logger, mongoUrl };
