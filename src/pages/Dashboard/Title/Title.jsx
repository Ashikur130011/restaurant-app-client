import React from 'react';

const Title = ({ heading, subHeading }) => {
    return (
        <div className=' md:w-3/6 mx-auto'>
            <h4 className='my-3 text-red-400'>--- {subHeading} ---</h4>
            <div className='border-y-4 border-red-100'>
                <h1 className='uppercase text-3xl my-2'>{heading}</h1>
            </div>
        </div>
    );
};

export default Title;