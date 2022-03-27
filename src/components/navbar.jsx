import {Link, useHistory} from "react-router-dom";
import {FaFire, FaReact} from "react-icons/fa";
import {useAuthState} from "react-firebase-hooks/auth";
import {useEffect, useState} from "react";
import {auth, logout} from "../firebase/firebase";

const Navbar = () => {

    const [navItem, setNavItem] = useState('');

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        if (!user) {
            setNavItem(<Link className='text-primary' to='/login'>Login</Link>);
        } else {
            setNavItem(<span className='pointer' onClick={() => logout()}>Logout</span>);
        }
    }, [user, loading])

    return (
        <nav className='navbar navbar-light bg-light'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>
                    <span className='text-warning'><FaFire />&nbsp;Firebase</span>
                    &nbsp;+&nbsp;
                    <span className='text-info'><FaReact />&nbsp;ReactJs</span>
                </Link>
                {navItem}
            </div>
        </nav>
    );
}

export default Navbar;
