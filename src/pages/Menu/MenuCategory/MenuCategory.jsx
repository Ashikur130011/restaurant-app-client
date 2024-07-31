import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import CoverLite from '../CoverLite/CoverLite';

const MenuCategory = ({items, text, title, img, btnText }) => {
    return (
        <div className='my-12'>
            {title && <CoverLite title={title} text={text} img={img}></CoverLite>}
            <div className='grid md:grid-cols-2 pt-16 gap-8'>
                {
                    items.map( item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline mt-10 uppercase border-0 border-b-4 btn-warning">{btnText}</button>
        </div>
    );
};

export default MenuCategory;