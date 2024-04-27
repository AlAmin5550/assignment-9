import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Router/AuthProvider";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";


const Navbar = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success("Sign out successful");
                navigate("/");

            }).catch((err) => {
                console.log(err.message)

            });
    }

    const navLinks =
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/profile">Update Profile</NavLink></li>
        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">SEASIDE</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user ? <img src={user.photoURL} alt="Tailwind CSS Navbar component" />:<img alt="Tailwind CSS Navbar component" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" />
                            }
                            
                        </div>
                    </div>
                </div>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn">Sign out</button> : <Link to="/login">
                            <button className="btn">Sign in</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;