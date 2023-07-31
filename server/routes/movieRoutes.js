import express from "express";
import {getMovieData, createMovie} from '../controllers/movieController.js';

const router = express.Router();

router.get('/getMovieData', getMovieData);
router.post('/createMovie', createMovie);

export default router;