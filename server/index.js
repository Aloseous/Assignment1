import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import getMovieData from './routes/movieRoutes.js'

// import MovieData from './models/movieModel.js'
// import {
//     movieData
// } from './data/movieData.js' // used for initial Data update

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000

connectDB()

app.use(express.json({limit:"30mb", extended:true}));
app.use(express.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use('/', getMovieData)

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

// MovieData.insertMany(movieData) // used for initial Data update





