
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';


import SubCatagory from '../SectionTitle/SectionTitle';

import pic1 from '../Pic home/slide1.jpg';
import pic2 from '../Pic home/slide2.jpg';
import pic3 from '../Pic home/slide3.jpg';
import pic4 from '../Pic home/slide4.jpg';
import pic5 from '../Pic home/slide5.jpg';


const Catagory = () => {
    return (
        <div>
            <SubCatagory
                heading='Your Heading'
                subHeading='Your SubHeading'
            >
            </SubCatagory>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper pb-4"
            >
                <SwiperSlide>
                    <img src={pic1} alt="Slide 1" />
                    <h3 className='text-3xl uppercase'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic2} alt="Slide 2" />
                    <h3 className='text-3xl uppercase'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic3} alt="Slide 3" />
                    <h3 className='text-3xl uppercase'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic4} alt="Slide 4" />
                    <h3 className='text-3xl uppercase'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pic5} alt="Slide 5" />
                    <h3 className='text-3xl uppercase'>Salad</h3>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Catagory;
