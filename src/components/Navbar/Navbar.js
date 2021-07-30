import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import Dropdown from './Dropdown';
import ProfileCard from './ProfileCard';

function Navbar() {

const [user, isLoggedIn] = useState({
    userName : "Abdullah",
    isLoggedIn : false
})

const [click, setClick] = useState(false);
const [dropdown, setDropdown] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const onMouseEnter = () => {
    if (window.innerWidth < 960) {
    setDropdown(false);
    } else {
    setDropdown(true);
    }
};

const onMouseLeave = () => {
    if (window.innerWidth < 960) {
    setDropdown(false);
    } else {
    setDropdown(false);
    }
};

    return (
    <>
        <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Motorify
            <i class='fas fa-car' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
            </li>
            <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
            <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
            >
                About <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
            <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
            >
                Services
            </Link>
            </li>
            
            <li className='nav-item'>
            <Link
                to ='/get-quote'
                className='nav-links'
                onClick={closeMobileMenu}
            >
                Get A Quote
            </Link>
            </li>

            {user.isLoggedIn && 
                <>
                    <li className='nav-links-mobile'>
                        <Link
                            to ='/login'
                            className = "login-links"
                            onClick={closeMobileMenu}
                        >
                            Manage profile
                        </Link>
                    </li>  
                    <li className='nav-links-mobile'>
                        <Link
                            to ='/login'
                            className = "login-links"
                            onClick={closeMobileMenu}
                        >
                            My cart
                        </Link>
                    </li>   
                    <li className='nav-links-mobile'>
                        <Link
                            to ='/login'
                            className = "login-links"
                            onClick={closeMobileMenu}
                        >
                            Logout
                        </Link>
                    </li>   
                </> 
            }

            {!user.isLoggedIn && 
                <li className='nav-links-mobile'>
                    <Link
                        to ='/login'
                        className = "login-links"
                        onClick={closeMobileMenu}
                    >
                        Login
                    </Link>
                </li>   
            }
        </ul>

        {user.isLoggedIn === true ? <ProfileCard userN={user.userName}/> : <Button text="Login"/>  }
    </nav>
    </>
);
}

export default Navbar;