import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import "swiper/css/navigation";
/* import "swiper/css/pagination"; */
import "swiper/css/scrollbar";

import InstractorCard from '../Cards/InstructorsCard';
const InstructorSlider = ({data}) =>{
    SwiperCore.use([Navigation]);
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
           /*  modules={[Navigation, Pagination]} */
           /*  navigation
            pagination={{
                clickable: true,
                
             }} */
            spaceBetween={5}
            slidesPerView={1}      
        >
            {data?.map((item)=>(
            <SwiperSlide>
                <InstractorCard data={item}/> 
            </SwiperSlide>
                
        ))}
      </Swiper>

    )
}

export default InstructorSlider