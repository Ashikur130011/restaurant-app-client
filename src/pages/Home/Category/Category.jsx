// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

//import images
import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'
import image4 from '../../../assets/home/slide4.jpg'
import image5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"Order Online"}
            >
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                initialSlide={2}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, FreeMode]}
                className="mySwiper mt-16 mb-24"
            >
                <SwiperSlide>
                    <img src={image1} alt="" />
                    <h3 className='md:text-3xl uppercase font-serif text-white -mt-16 '>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" />
                    <h3 className='text-3xl uppercase font-serif text-white -mt-16 '>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide className='default'>
                    <img src={image3} alt="" />
                    <h3 className='text-3xl uppercase font-serif text-white -mt-16 '>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt="" />
                    <h3 className='text-3xl uppercase font-serif text-white -mt-16 '>Desart</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image5} alt="" />
                    <h3 className='text-3xl uppercase font-serif text-white -mt-16 '>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;