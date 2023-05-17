import { Link } from "react-router-dom";

const NavBar = () => {
    const handleLogOut = ()=>{

    }
    const user='masum';
    const navItems =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/all-toy'>All Toys</Link></li>
            {user && <>
                <li><Link to='/add-toy'>Add Toy</Link></li>
                <li><Link to='/my-toy'>My Toys</Link></li>
            </>
            }
        </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/'><img className="w-10 h-10" src='hulk.png' alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                    <button onClick={handleLogOut}>LogOut</button>
                
                <img title="masum" className="w-10 h-10 rounded-large" src="https://i.ibb.co/ynZtcDw/chef2.jpg" alt="" /> </>:<span>Login</span>
                }

            </div>
        </div>
    );
};

export default NavBar;