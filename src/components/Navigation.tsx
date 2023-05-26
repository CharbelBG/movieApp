import styles from './navigation.module.scss';
import {Link} from 'react-router-dom'; 

export default function Navigation(){


return(
<nav className={styles.container} >
    <Link to='/'>Home</Link>
    <Link to='/movie'>Movie</Link>
</nav>
)
}