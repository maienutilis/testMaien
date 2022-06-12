import express from 'express';
import cors from "cors";
import {readdirSync} from "fs"

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin:["http://localhost:3000"]
}));

// autoload routes
readdirSync("./routes").map((r)=> app.use("/api" , require(`./routes/${r}`)))

const port = process.env.PORT  || 8000;
app.listen (port , ()=> console.log(`server running on port ${port}`))