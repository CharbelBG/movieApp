import styles from './moviesCards.module.scss';

interface Props{
    url:string
}

export default function MoviesCard({url}:Props){


return(
    <div className={styles.cardContainer}>
        <img src={`https://image.tmdb.org/t/p/w500${url}`} alt="movieImage" />
    </div>
)
}
