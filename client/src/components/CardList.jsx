import React from 'react'
import { Card, Row } from 'react-bootstrap'


const CardList = ({ data }) => {
    return (
        <div className='card-container bg-dark d-flex align-center'>
            <Row className='d-flex align-center'>
            {data?.map(movie => {
                return (
                    <Card className="m-2" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{movie.movieName}</Card.Title>
                            <Card.Text>Rating: {movie.rating}</Card.Text>
                            <Card.Text>Release Data: {movie.releaseDate}</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })
            }
            </Row>
        </div>
    )
}

export default CardList
