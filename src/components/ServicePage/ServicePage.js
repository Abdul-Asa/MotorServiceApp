import React from 'react';
import HeaderText from '../HomePage/HeaderText';
import HeaderWord from '../HomePage/HeaderWord';
import Cards from '../ServiceCard/Cards';
import Reviews from '../Reviews/Reviews';
import './css/servicePage.css'

const ServicePage = () => {
    return (
    <>
        <body className="ServiceBackground">
            <div className="HeaderContainer">
                <HeaderText text1="Services" text2=""/>
                <HeaderWord text="Choose from our wide range of services"/>
            </div>
        </body> 
        <h2 className="subHeader">Our Services</h2>
        <Cards />
        <h2 className="subHeader">Client's Love</h2>
        <Reviews />
    </>
    )
   
}

export default ServicePage
