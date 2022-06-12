import express from "express";
import formidable from "express-formidable";

const router = express.Router();

// controllers 
import {getData} from "../controllers/data";


router.get('/get-data', getData)


module.exports = router;