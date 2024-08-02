import { Link } from 'react-router-dom';
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
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline mt-10 uppercase border-0 border-b-4 btn-warning">{btnText}</button></Link>
        </div>
    );
};

export default MenuCategory;