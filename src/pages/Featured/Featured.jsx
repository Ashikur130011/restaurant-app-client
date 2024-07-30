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
        <div className='md:flex justify-center items-center mx-auto pb-20 w-3/4'>
            <div>
                <img src={featuredImage} alt="" />
            </div>
            <div className='md:ml-10 text-left'>
                <p>Aug 20, 2029</p>
                <p>Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, distinctio voluptatibus ea veniam reprehenderit nesciunt quaerat explicabo, nam ullam eos rerum qui? Recusandae adipisci, nam minima facilis numquam voluptatum distinctio!</p>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Featured;