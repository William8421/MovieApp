import axios from 'axios';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState, useEffect } from 'react';

const handleDragStart = (e) => e.preventDefault();


const Carousel = ({media_type, id}) => {
    const [credits, setCredits] = useState()
    const noPicture = 'https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg'
    
    const items = credits?.map(item => (
        <div className='carouselItem'>
            <img src={item.profile_path ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`:noPicture}
            alt=""
            onDragStart={handleDragStart}
            className="carouselItem_img"
            />
            <b className='carouselItem_txt'>{item?.name}</b>
        </div>
    ));

    const responsive ={
        0:{
            items: 3,
        },
        512:{
            items: 5,
        },
        1024:{
            items:7,
        },
    };


    const fetchCredits = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
        setCredits(data.cast)
    }

    useEffect(() => {
        fetchCredits()
        // eslint-disable-next-line
    }, [])

  return (
    <AliceCarousel
    autoPlay
    responsive={responsive}
    disableDotsControls
    disableButtonsControls
    mouseTracking
    items={items} />
  );
}
export default Carousel