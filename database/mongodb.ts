const MongoClient = require("mongodb").MongoClient;
import { constants } from "../utils/constants";

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOSTNAME } = constants;

// const uri = `mongodb+srv://${DB_USER}:${encodeURIComponent(DB_PASSWORD)}@${DB_HOSTNAME}/${DB_NAME}`;
const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOSTNAME}/${DB_NAME}`;

let cacheDB = null;

export const connect = async () => {
  if (cacheDB) return cacheDB;

  const client = new MongoClient(uri, { useNewUrlParser: true });
  try {
    await client.connect();
    cacheDB = await client.db(DB_NAME);
    return cacheDB;
  } catch (error) {
    console.log(error);
  }
};
