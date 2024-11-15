import dotenv from "dotenv";

dotenv.config();

const config={
    port: process.env.PORT,
    db_url: process.env.DB_URL,
  };


  export default config;