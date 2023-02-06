import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import CategoryCard from "../Cards/CategoryCard";

const CategorySlider = ({data}) =>{
    SwiperCore.use([Navigation,Pagination]);
    return(
        <Swiper
          
            className='items-center'
            breakpoints={{
            
            640: {
                slidesPerView: 2,
            },
            
            1024: {
                slidesPerView: 6,
            },
            768: {
                slidesPerView: 3,
            },

            }}
           /*  modules={[Navigation, Pagination]}
            navigation
            pagination={{
                clickable: true,
                
             }} */
            spaceBetween={5}
            slidesPerView={1}      
        >
            {data?.map((item)=>(
            <SwiperSlide>
                <CategoryCard data={item}/> 
            </SwiperSlide>
                
        ))}
      </Swiper>

    )
}

export default CategorySlider