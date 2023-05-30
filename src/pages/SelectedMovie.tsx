import {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import styles from './selectedMovie.module.scss';
import axios from 'axios';

interface Details{
    backdrop_path:string,
    overview:string,
    runtime:number,
    title:string,
    poster:string,
    date:string,
    tagline:string,
    language:string,
    budget:number,
    status:string
}

export default function SelectedMovie(){
    const params = useParams();
    const [details, setdetails] = useState<Details>();

    useEffect(()=>{
        getDetails();
    },[]);

    async function getDetails(){
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_API_KEY}`);
     
        setdetails({
            backdrop_path:data.backdrop_path,
            overview:data.overview,
            runtime:data.runtime,
            title:data.title,
            poster:data.poster_path,
            date:data.release_date,
            tagline:data.tagline,
            language:data.original_language,
            budget:data.budget,
            status:data.status
        })
    }

return(
<div className={styles.container}>
    <h1>{details?.title}</h1>
    
    <div className={styles.imageAndText}>
        <img src={`https://image.tmdb.org/t/p/w500${details?.backdrop_path}`} alt="movieImg" />
        <p>
            {details?.tagline}
        </p>
    </div>
    <div className={styles.overview}>
    <h2>Overview</h2>
    <p>{details?.overview}</p>
    </div>

    <div className={styles.moivieDetails}>
        <img src={`https://image.tmdb.org/t/p/w500${details?.poster}`} alt="posterImg" />
        <div className={styles.stats}>
            <div>
                <span>Release Date</span>
                <span>{details?.date}</span>
            </div>

            <div>
                <span>Runtime</span>
                <span>{details?.runtime} min</span>
            </div>

            <div>
                <span>Language</span>
                <span>{details?.language}</span>
            </div>

            <div>
                <span>budget</span>
                <span>{details?.budget}$</span>
            </div>

            <div>
                <span>status</span>
                <span>{details?.status}</span>
            </div>

        </div>
    </div> 
    
    <div className={styles.playBtn}>
        <span>
            Play 
        <img src="/play.svg" alt="play" />
        </span> 
    </div>

</div>
)
}
