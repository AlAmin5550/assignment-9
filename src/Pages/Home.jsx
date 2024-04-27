import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner"
import Info from "../components/Info";
// Slider 

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../components/styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import Cards from "../components/Cards";
import Company from "../components/Company";

const Home = () => {
    const estates = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <div className="container mx-auto mt-16">
                <h1 className="text-5xl text-blue-500 font-semibold">FIND YOUR CHOICE</h1>
                <Swiper
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        estates.map((estate,idx) => <SwiperSlide key={idx}><Cards estate={estate}></Cards></SwiperSlide>)
                    }
                    
                </Swiper>
            </div>
            <Company></Company>

        </div>
    );
};

export default Home;