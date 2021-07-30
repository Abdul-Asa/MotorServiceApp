import React, { useState } from 'react';
import './css/Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
const [click, setClick] = useState(false);
const handleClick = () => setClick(!click);

return (
    <>
    <ul
        onClick={handleClick}
        className='profile-menu'
    >
        {profileItems.map((item, index) => {
        return (
            <li key={index}>
            <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
            >
                {item.icon}
                {item.title}
            </Link>
            </li>
        );
        })}
    </ul>
    </>
);
}

const profileItems =[
    {
        title: 'Manage profile',
        cName: 'profile-link',
        path: "/profile/manage",
        icon: <i className='fa fa-cog icons'/> 
    },

    {
        title: 'My cart',
        cName: 'profile-link',
        icon: <i className='fa fa-shopping-cart icons'/> ,
        path: "/profile/cart"
    },

    {
        title: 'Logout',
        cName: 'profile-link',
        path: "/login",
        icon: <i className='fa fa-sign-out icons'/> 

    },

]



export default Profile;