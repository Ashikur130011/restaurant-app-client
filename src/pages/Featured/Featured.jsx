import React from 'react';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import featuredImage from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured-item text-white my-20'>
            <div className='content'>
            <SectionTitle
                subHeading="Check it out"
                heading="From our menu"
            ></SectionTitle>
        <div className='md:flex justify-center items-center mx-auto pt-16 pb-20 w-3/4'>
            <div>
                <img src={featuredImage} alt="" />
            </div>
            <div className='md:ml-10 text-left'>
                <p className='text-xl'>Aug 20, 2029</p>
                <p className='text-xl uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, distinctio voluptatibus ea veniam reprehenderit nesciunt quaerat explicabo, nam ullam eos rerum qui? Recusandae adipisci, nam minima facilis numquam voluptatum distinctio!</p>
                <button className="btn btn-outline mt-4 uppercase border-0 border-b-4 btn-warning">Read More</button>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Featured;