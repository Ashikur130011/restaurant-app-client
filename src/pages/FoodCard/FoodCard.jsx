import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;    
    return (
        <div className="card text-black card-compact bg-base-100 w-96 shadow-xl">
            <figure className='rounded-2xl'>
                <img
                    src={image}
                    alt="food items" />
            </figure>
            <p className='absolute bg-slate-800 right-0 rounded me-4 mt-2 px-1 text-white '>$ {price}</p>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p> 
                <div className="card-actions justify-end">
                    <button className="btn btn-outline mt-10 uppercase border-0 border-b-4 text-orange-500">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;