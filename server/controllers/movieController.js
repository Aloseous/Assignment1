import MovieData from '../models/movieModel.js'

export const getMovieData = async(req, res) =>{

    try {
        const movieList = await MovieData.find({});
        res.status(200).json({result: movieList})
    } catch (error) {
        res.status(400).json({message: error.message});
    }    
}


export const createMovie = async (req, res) =>{    
    const post = req.body
    const newPost = new MovieData({ ...post, creator: req.userId, createdAt: new Date().toISOString})
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
 
 }
 