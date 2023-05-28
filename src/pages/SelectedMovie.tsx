import {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import styles from './selectedMovie.module.scss';
import axios from 'axios';



interface Details{
    backdrop_path:string,
    overview:string,
    runtime:number,
    title:string,
}

export default function SelectedMovie(){
    const params = useParams();
    const [details, setdetails] = useState<Details>();
    useEffect(()=>{
        getDetails();
    },[]);

    async function getDetails(){
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_API_KEY}`);
        console.log(data);
        setdetails({backdrop_path:data.backdrop_path,
            overview:data.overview,
            runtime:data.runtime,
            title:data.title,
        })   
    }
    console.log(details);

return(
<div className={styles.container}>
   <h1>{details?.title}</h1>
    <img src={`https://image.tmdb.org/t/p/w500${details?.backdrop_path}`} alt="movieImg" />
    <p>
        {details?.overview}
    </p>
</div>
)
}
