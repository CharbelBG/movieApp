import { useEffect, useState} from 'react';
import styles from './newRealeases.module.scss';
import axios from 'axios';
import MoviesCard from '../components/MoviesCard';

interface TvShow{
    id:number,
    name:string,
    poster_path:string
}

export default function NewReleases(){
    
    const [tvList, setTvList] = useState<TvShow[]>([]);

    useEffect(()=>{
        getTvShows();
    },[]);

    async function getTvShows(){
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`);
        setTvList(data.results);
    }

    const renderTvShows = tvList.map((show, index)=>{
        return <MoviesCard id={show.id} url={show.poster_path} key={index} />
    });

return(
<>
    <h1 className={styles.header}>New Releases</h1>
    <div className={styles.container}>
    {renderTvShows}
    </div>

</>
);
}
