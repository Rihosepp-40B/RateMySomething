import "dotenv/config";
import express from "express";
import cors from "cors";
import fs = require("fs");
import { sync } from "./db.ts";
// approutes

const port = process.env.PORT;
const host = "localhost";

const app = express();
app.use(cors())
app.use(express.json())

//appr

app.listen(port, async() =>
{
    if (process.env.sync === "true")
    {
        await sync()
    }
    console.log(`api jookseb aadressil http://${host}:${port}`)
})