import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';
import { Link } from 'react-router-dom';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === 'popular')


    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading={"Check it out"}
                heading={"From our Menu"}
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 mt-16 gap-8'>
                {
                    popular.map( item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to="/menu"><button className="btn btn-outline mt-12 uppercase border-0 border-b-4">View Full Menu</button></Link>
        </section>
    );
};

export default PopularMenu;