import React from 'react';
import './card.css';


export default function Card({title, popularity, releaseDate, voteAverage, poster}){

return(
    <div className='cardContainer'>
        <div className='imgContainer'>
            <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt='image' />
        </div>
        {title} <br />
        {popularity} <br />
        {releaseDate} <br />
        {voteAverage} <br />
    </div>
)
}