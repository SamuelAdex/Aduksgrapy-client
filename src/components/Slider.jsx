import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Autoplay } from "swiper";

import aduks1 from '../assets/img/aduks1.jpg'
import aduks2 from '../assets/img/aduks2.jpg'
import aduks3 from '../assets/img/aduks3.jpg'
import aduks4 from '../assets/img/aduks4.jpg'
import aduks5 from '../assets/img/aduks5.jpg'
import aduks6 from '../assets/img/aduks6.png'

const Slider = ()=>{
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}            
            modules={[EffectCoverflow, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={aduks1} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={aduks2} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={aduks3} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={aduks4} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={aduks5} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={aduks6} alt="" loading="lazy" />
            </SwiperSlide>
        </Swiper>
    )
}


export default Slider