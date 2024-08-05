import { Helmet } from 'react-helmet';
import { AiFillSchedule } from 'react-icons/ai';
import { FaCalendarAlt, FaHome } from 'react-icons/fa';
import { GiWallet } from 'react-icons/gi';
import { MdContactMail, MdFastfood, MdRateReview } from 'react-icons/md';
import { TiShoppingCart } from 'react-icons/ti';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/logo.png'
import { BiSolidFoodMenu } from 'react-icons/bi';

const Dashboard = () => {
    return (
        <>
        <Helmet>
                <title>Restaurant | Dashboard</title>
            </Helmet>
        <div className='flex font-serif '>
            <div className='w-64 min-h-screen py-6 bg-orange-500'>
                <div className='flex bg-slate-50 items-center mx-4 p-2 rounded-lg gap-3'>
                    <div className='w-12'><img src={logo} alt="" /></div>
                <h1 className='text-2xl font-bold'>Restaurant</h1>
                </div>
                <ul className='menu p-4 space-y-1'>
                    <li>
                        <NavLink to="/dashboard/userHome" className="uppercase" ><FaHome className="text-2xl" />User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation" className="uppercase" ><FaCalendarAlt className="text-2xl" />reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment" className="uppercase" ><GiWallet className="text-2xl" />payment</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart" className="uppercase" ><TiShoppingCart className="text-2xl" />My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/addReview" className="uppercase" ><MdRateReview className="text-2xl" />add review</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking" className="uppercase" ><AiFillSchedule className="text-2xl" />My Booking</NavLink>
                    </li>
                    <div>
                        <span className='divider divider-warning'></span>
                    </div>
                    <li>
                        <NavLink to="/" className="uppercase" ><FaHome className="text-2xl" />Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking" className="uppercase" ><BiSolidFoodMenu className="text-2xl" />Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order" className="uppercase" ><MdFastfood className="text-2xl" />Food Items</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="uppercase" ><MdContactMail className="text-2xl" />Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
        </>
    );
};

export default Dashboard;