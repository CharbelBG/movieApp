import {React, useState, useEffect} from 'react';
import './home.css';
import Card from '../components/Card';
import axios from 'axios';

/*
 * 1 consume the api
 * must have a slider
 * tv shows or movies select ratio
 * must have cards
*/

export default function Home(){
const [popularData, setPopularData] = useState([]);

useEffect( ()=>{
    getPopular();
},[]);


async function getPopular(){
    try{
        let {data} = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=f33715dc81e91eb90df286fc39f53a61&language=en-US&page=1');
         setPopularData(data.results);
    }catch(e){
        console.log(e);
    }       
}
console.log(popularData);
return (
<>
    <h1>this is home</h1>
    <Card backdrop_path ={popularData[0]?.backdrop_path} />
</>
)
}