import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
export function MovieCard({ card, handleClick}){
    
    
    return (
        <div className="movie">
            <div></div>
            <div>
                <Carousel style={{ width: '300px', height: '100%' }}>
                    {card?.imgs?.map((item, index) => (
                        <Carousel.Item style={{width:'100%',height:'100%'}} key={index}>
                            <img
                                className="d-block w-100 img-fluid"
                                style={{width:'100%',height:'100%'}}
                                src={item}
                                alt={`Slide ${index}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>  
            <div>
                <span>{card.price}</span>
                <h5>{card.title}</h5>
                <center>
                    <button
                        type="button"
                        class="btn btn-secondary"
                        onClick={handleClick}
                    >
                        Oder Now
                    </button>
                </center>
            </div> 
        </div>
    );
};
export default MovieCard;
