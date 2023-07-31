import mongoose from 'mongoose';

const movieSchema = mongoose.Schema({
    id:{type: Number},
    movieName:{type: String},
    rating:{type: String},
    releaseDate:{type: String},
})

const MovieData = mongoose.model('movieData', movieSchema)

export default MovieData;