import React from 'react';
import FoodCard from '../FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid mt-8 md:grid-cols-3 gap-10'>
        {
            items.map(item => <FoodCard
            key={item._id}
            item={item}
            ></FoodCard>)
        }
        </div>
    );
};

export default OrderTab;