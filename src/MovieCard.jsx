import React from 'react';
const MovieCard = ({ card, handleClick}) => {
    
    
    return (
        <div className="movie">
            <div>
                <p>{card.section}</p>
            </div>
            <div>
                <img
                    src={
                        card.img !== 'N/A'
                            ? card.img
                            : 'https://via.placeholder.com/400'
                    }
                    alt={card.img}
                />
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
