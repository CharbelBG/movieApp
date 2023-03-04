import {React, useState, useEffect, useRef} from 'react';
import './home.css';
import Card from '../components/Card';
import axios from 'axios';

import {register} from 'swiper/element/bundle';

register(); 

export default function Home(){

const [popularData, setPopularData] = useState([]);
const swiperElRef = useRef(null);

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
    const renderSlider = popularData.map((movie, index)=>{
        return  <swiper-slide key={index}>
            <Card 
                voteAverage = {movie?.vote_average}
                title = {movie?.title}
                poster = {movie?.poster_path} />
        </swiper-slide>
    });
 
return (
<>
    <div className='homeSliderContainer'>
        <swiper-container ref={swiperElRef} slides-per-view="3"
            navigation="true" pagination="true">
        {renderSlider}
        </swiper-container>
    </div> 
</>
)
}