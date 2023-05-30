import {useState, useEffect} from 'react';
import styles from "./movies.module.scss";
import axios from 'axios'; 
import MoviesCard from '../components/MoviesCard';


type TrendingMovie = {
    adult:boolean,
    backdrop_path:string,
    genre_ids:any,
    id:number,
    original_language:string,
    original_title:string,
    overview:string,
    popularity:string,
    poster_path:string,
    release_date:string,
    title:string,
    video:boolean,
    vote_average:number,
    vote_count:number
}

export default function Movies() {
    const [trending, setTrending] = useState<TrendingMovie[]>([]);

    useEffect(()=>{
        getMovies();
    },[]);

    async function getMovies(){
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`);
        setTrending(data?.results);
    }

    const renderTrending = trending.map((movie, index)=>{
        return <MoviesCard id={movie.id} url={movie.poster_path} key={index} />
    })

return(
<>
    <div className={styles.container}>
        {renderTrending}
    </div>
</>
);
}
