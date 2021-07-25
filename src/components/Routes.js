import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import ContactUs from '../pages/ContactUs'
import GetAQuote from '../pages/GetAQuote'
import OurTeam from '../pages/OurTeam'
import Pricing from '../pages/Pricing'
import Products from '../pages/Products'
import ServiceAll from '../pages/ServiceAll'



function Routes() {
    return(
        <Switch>
            <Route exact path ="/">
                <Home/>
            </Route>
            <Route path ="/login">
                <Login/>
            </Route>
            <Route path ="/sign-up">
                <Signup/>
            </Route>
            <Route path ="/products">
                <Products/>
            </Route>
            <Route path ="/contact-us">
                <ContactUs/>
            </Route>
            <Route path ="/get-quote">
                <GetAQuote/>
            </Route>
            <Route path ="/pricing">
                <Pricing/>
            </Route>
            <Route path ="/our-team">
                <OurTeam/>
            </Route>
            <Route path ="/services">
                <ServiceAll/>
            </Route>
        </Switch>
    )
}

export default Routes;