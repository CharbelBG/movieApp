import { Link } from 'react-router-dom';
import styles from './footer.module.scss';

export default function Footer(){

return(
<footer className={styles.container}>
    <div>
        <img src="/popcorn.png" alt="footerimg" />
        <span>POPCORN MOVIES</span>
    </div>
    
    <Link to ='https://github.com/CharbelBG'> 
        created by Charbel Bou Ghazalé
    </Link>
</footer>
);
}
