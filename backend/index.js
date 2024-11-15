import express from "express"
import  config  from "./config/config.js";
import db from "./config/db.js"
import eventRouter from "./routes/event.routes.js"

const app = express();

app.use(express.json());


app.use("api/events",eventRouter);


db.then(() =>{
    console.log("database connected..");
}).catch((err)=>{
    console.log("error in db");
})

app.listen(config.port,()=>{
    console.log(`server running at port${config.port}`);
});