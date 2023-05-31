import {useState, useEffect} from 'react';
import styles from './genres.module.scss';
import axios from 'axios';

type GenresData = {
    id:number,
    name:string
}

export default function Genres(){

    const [genres, setGenres] = useState<GenresData[]>([]);

    useEffect(()=>{
        getGenres();
    },[]);

    async function getGenres(){
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`);
        setGenres(data.genres);
    }

    const renderGenres = genres?.map((genre, index)=>{
        return <div className={styles.card} key={index}>
            {genre.name}
        </div>
    });

return(
<div className={styles.container}>
    {renderGenres}
    <div className={styles.card}>Action</div>
    <div className={styles.card}>Animation</div>
</div>
);
}
