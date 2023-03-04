import React from 'react';
import './card.css';


export default function Card({title, voteAverage, poster}){

return(
    <div className='cardContainer'>
        <div className='imgContainer'>
            <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt='image' />
        </div>

        <div className='cardTextContainer'>
            <span>
                {title}  
            </span>
            <span className='rating'>
                {voteAverage}
                <img src="/star.svg" alt="star" />
            </span>
        </div>


    </div>
)
}