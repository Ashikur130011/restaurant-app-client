import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import './Navbar.css'
import { RiLogoutCircleRLine, RiLoginCircleLine } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()
    const [isAdmin] = useAdmin()

    const navOptions = <>
        <li><Link to="/" className="uppercase me-2 navbar-button font-bold">Home</Link></li>
        <li><Link to="/" className="uppercase me-2 navbar-button font-bold">Contact Us</Link></li>
        <li><Link to="/menu" className="uppercase me-2 navbar-button font-bold">Our Menu</Link></li>
        <li><Link to="/order/salad" className="uppercase me-2 navbar-button font-bold">Our Food</Link></li>
        {
            user && !isAdmin && <li><Link to="/dashboard/userDashboard" className="uppercase me-2 navbar-button font-bold">Dashboard</Link></li>
        }
        {
            user && isAdmin && <li><Link to="/dashboard/adminDashboard" className="uppercase me-2 navbar-button font-bold">Dashboard</Link></li>
        }
    </>


    //handle logout
    const handleLogout = () => {
        logOut()
    }

    return (
        <div className="navbar md:fixed z-10 max-w-screen-xl bg-black bg-opacity-30 md:text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Restaurant</a>
            </div>
            <div className="navbar-center navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end md:me-4">
            {isAdmin? <Link to='/dashboard/manageItems'><button className="me-3 flex text-green-600 items-center">
            <GiShoppingCart className="text-2xl" />
            <div className="badge badge-success text-white ">+{cart.length}</div>
        </button></Link>:
        <Link to='/dashboard/cart'><button className="me-3 flex text-green-600 items-center">
        <GiShoppingCart className="text-2xl" />
        <div className="badge badge-success text-white ">+{cart.length}</div>
    </button></Link>
        }
                {
                    user ? <>
                        <div className=" me-4 flex flex-col items-center justify-center ">
                            <img className="rounded-full w-8" src={user.photoURL} alt="" />
                            <p className="">{user?.displayName}</p>
                        </div>
                        <Link onClick={handleLogout} className=" text-orange-700 text-3xl"><RiLogoutCircleRLine /></Link>
                    </>
                        : <Link to="/login" className="text-green-800 text-3xl"><RiLoginCircleLine /></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;