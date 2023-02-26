import React from "react";
import {Link} from 'react-router-dom';
import './header.css';

export default function Header(){

return(
<>
    <nav className="headerContainer">
        <Link to='/'>Flix</Link>
        <div>
            <Link to='/search'>Search</Link>
            <Link to='/tvshows'>TV Shows</Link>
        </div>
    </nav>
</>
)

}


