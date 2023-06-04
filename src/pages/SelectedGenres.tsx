import { useEffect } from 'react'; 
import { useParams } from "react-router";
import styles from './selectedGenres.module.scss';
import axios from 'axios';

export default function SelectedGenres(){

    const params = useParams();
    
    useEffect(()=>{
       getMovies();
    },[]);

    async function getMovies() {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}/lists?language=en-US&page=2&api_key=${import.meta.env.VITE_API_KEY}`);
        console.log(data);
    }
 

return(
<div className={styles.container}>
    This is a list of movies. {params.id}
</div>
);
}
