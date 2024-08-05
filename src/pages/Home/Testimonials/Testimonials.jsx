import { useEffect, useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    //Loading reviews data
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <SectionTitle
                subHeading="What Our Client Say"
                heading="Testimonials"
            ></SectionTitle>
            <div className='mb-8 pt-16 w-3/4 mx-auto'>
                {
                    <Swiper
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                    >

                        {
                            reviews.map(review => <SwiperSlide
                                key={review._id}>
                                <div className='mb-12 flex flex-col items-center '>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <p className='mt-8 w-3/4'>{review.details}</p>
                                    <h3 className='text-xl text-orange-400'>{review.name}</h3>
                                </div>
                            </SwiperSlide>)
                        }

                    </Swiper>
                }
            </div>
        </div>
    );
};

export default Testimonials;