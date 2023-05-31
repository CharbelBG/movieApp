import { useParams } from "react-router";
import styles from './selectedGenres.module.scss';

export default function SelectedGenres(){

    const params = useParams();

return(
<div className={styles.container} >
    This is a list of movies. {params.id}
</div>
);
}
