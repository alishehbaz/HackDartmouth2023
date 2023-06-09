import { connect } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/.env" });

// 4. Connect to MongoDB
export async function connectToMongo() {
  console.log("Connecting to DB");
  const dbName = "hackdartmouth";
  const connectionUrl = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@hackdartmouth.ybqh3tw.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  await connect(connectionUrl);
  console.log("Connection Successful");
}
