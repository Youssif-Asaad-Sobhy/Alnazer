import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
export function MovieCard({ card}){
    
    
    return (
        <div className="movie">
            <div>
                <Carousel >
                    {card?.imgs?.map((item, index) => (
                        <Carousel.Item key={index} style={{height:'400px'}}>
                            <img
                                className="d-block mx-auto"
                                style={{height:'400px'}}
                                src={item}
                                alt={`Slide ${index}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>  
        </div>
    );
};
export default MovieCard;
