import React from 'react';
import Team from './Team';
import HeaderWord from '../HomePage/HeaderWord';
import HeaderText from '../HomePage/HeaderText';
import './css/teamPage.css'

const TeamPage = () => {
    return (
    <>
        <body className="ServiceBackground">
            <div className="HeaderContainer">
                <HeaderText text1="Team" text2=""/>
                <HeaderWord text="Meet our talented team of Engineers"/>
            </div>
        </body> 
        <h2 className="subHeader">Our Team</h2>
        <Team />
        
    </>
    )
}

export default TeamPage
