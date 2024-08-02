import { Link} from "react-router-dom";


const Navbar = () => {
    
    const navOptions = <>
        <li><Link to="/" className="uppercase me-2 font-bold">Home</Link></li>
        <li><Link to="/" className="uppercase me-2 font-bold">Contact Us</Link></li>
        <li><Link to="/login" className="uppercase me-2 font-bold">Login</Link></li>
        <li><Link to="/menu" className="uppercase me-2 font-bold">Our Menu</Link></li>
        <li><Link to="/order/salad" className="uppercase me-2 font-bold">Our Food</Link></li>
    </>
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
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
    );
};

export default Navbar;