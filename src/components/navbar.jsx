import {Link} from "react-router-dom";
import {FaFire, FaReact} from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className='navbar navbar-light bg-light'>
            <div className='container'>
                <Link className='navbar-brand' to='/'>
                    <span className='text-warning'><FaFire />&nbsp;Firebase</span>
                    &nbsp;+&nbsp;
                    <span className='text-info'><FaReact />&nbsp;ReactJs</span>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
