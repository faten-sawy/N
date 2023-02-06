
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const NewsSlider = ({data}) =>{
    SwiperCore.use([Navigation,Pagination]);
    return(
        <Swiper
            className='items-center'
            breakpoints={{
            
            640: {
                slidesPerView: 1,
            },
            
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },

            }}
            /* modules={[Navigation, Pagination]}
            navigation
            pagination={{
                clickable: true,                
             }} */
            spaceBetween={5}
            slidesPerView={1}      
        >
            {data?.map((item)=>(
            <SwiperSlide>
               {/*  <Course data={item}/>  */}
            </SwiperSlide>
                
        ))}
      </Swiper>

    )
}

export default NewsSlider