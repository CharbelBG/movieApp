import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import styles from './genres.module.scss';
import axios from 'axios';

type GenresData = {
    id:number,
    name:string
}

export default function Genres(){
    const [genres, setGenres] = useState<GenresData[]>([]);
    const nav = useNavigate();

    useEffect(()=>{
        getGenres();
    },[]);

    async function getGenres(){
        const {data} = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${import.meta.env.VITE_API_KEY}`);
        setGenres(data.genres);
    }

    const renderGenres = genres?.map((genre, index)=>{
        return <div onClick={()=> nav(`/genres/${genre.id}`)} className={styles.card} key={index}>
            {genre.name}
        </div>
    });

return(
<>
<h1 className={styles.header}>Select A Genre</h1>
<div className={styles.container}>
    {renderGenres}
    <div onClick={()=> nav('/genres/28')}  className={styles.card}>Action</div>
    <div onClick={()=> nav('/genres/16')} className={styles.card}>Animation</div>
</div>
</>
);
}
