import React from 'react';
import './card.css';

export default function Card({backdrop_path}){
    //https://image.tmdb.org/t/p/w500//irwQcdjwtjLnaA0iErabab9PrmG.jpg

/* {
            "adult": false,
            "backdrop_path": "/irwQcdjwtjLnaA0iErabab9PrmG.jpg",
            "genre_ids": [
                28,
                12,
                53
            ],
            "id": 646389,
            "original_language": "en",
            "original_title": "Plane",
            "overview": "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
            "popularity": 2277.913,
            "poster_path": "/qi9r5xBgcc9KTxlOLjssEbDgO0J.jpg",
            "release_date": "2023-01-12",
            "title": "Plane",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 683
        },*/

return(
    <div className='cardContainer'>
        <div className="imgContainer">
            <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt="image" />
        </div>
    </div>
)
}