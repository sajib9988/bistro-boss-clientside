import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import FoodCard from "../FoodCard/FoodCard";

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: (index, className) => `<span class="${className}">${index + 1}</span>`,
    };

    // Determine the number of items per slide
    const itemsPerSlide = 6;
    const slides = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
        slides.push(
            <SwiperSlide key={i}>
                <div className='grid md:grid-cols-3 gap-10'>
                    {items.slice(i, i + itemsPerSlide).map(item => (
                        <FoodCard key={item._id} item={item}></FoodCard>
                    ))}
                </div>
            </SwiperSlide>
        );
    }

    return (
        <div>
            <Swiper
                pagination={pagination}
                navigation
                modules={[Pagination, Navigation]}
                className="mySwiper text-2xl mt-3"
            >
                {slides}
            </Swiper>
        </div>
    );
};

export default OrderTab;