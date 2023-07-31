import React, { useEffect, useState } from 'react'
import CardList from './CardList';
import './styles.css'
import { Card } from 'react-bootstrap'
import {getMovieData} from '../actions/movie'

const MovieList = () => {
    const [movieData, setMovieData] = useState(null)    
    useEffect(() => {
        getMovie();
    }, [])

    const getMovie = async () => {
        const {result} = await getMovieData();
        setMovieData(result)
    }

    return (
        <div className='container'>
            <Card className='my-3 bg-dark'>
            <Card.Title className='text-white'>Movies</Card.Title>
            </Card>
            {movieData && 
            <CardList data={movieData}/>
            }
        </div>
    )
}

export default MovieList;
