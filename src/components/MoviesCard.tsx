import { useNavigate } from 'react-router';
import styles from './moviesCards.module.scss';
interface Props{
    url:string,
    id:number
}

export default function MoviesCard({url,id}:Props){

    const nav = useNavigate();

return(
    <div onClick={()=>nav(`/movie/${id}`)} className={styles.cardContainer}>
        <img src={`https://image.tmdb.org/t/p/w500${url}`} alt="movieImage" />
    </div>
)
}
