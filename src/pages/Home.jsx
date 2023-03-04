import {React, useState, useEffect} from 'react';
import './home.css';
import Card from '../components/Card';
import axios from 'axios';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
 
/*
 * 1 consume the api
 * must have a slider swiper.js
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
    const renderSlider = popularData.map((movie, index)=>{
        return  <SwiperSlide key={index}>
            <Card    voteAverage = {movie?.vote_average}
             title = {movie?.title}
                poster = {movie?.poster_path} />
        </SwiperSlide>
    });
 
return (
<>
    <div className='homeSliderContainer'>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   onSlideChange={() => console.log('slide change')}
        >
        {renderSlider}
        </Swiper>
    </div> 
</>
)
}