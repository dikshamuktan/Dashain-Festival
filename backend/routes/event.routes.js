import express from "express";

import {
    getEvent,
    addEvent,
    deleteEvent,
    editEvent,
} from "../controller/event.controller.js";

const router = express.Router();

router
.get("/",getEvent)
.post("/add",addEvent)
.patch("/edit",editEvent)
.delete("/delete",deleteEvent)

export default router;