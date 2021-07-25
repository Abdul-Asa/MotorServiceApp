import React from 'react'
import Button from './Button'
import Card from './Card'
import Input from './Input'    
import InputGroup from './InputGroup'
import { EntryPage, PageHeader } from './entryPage'
import { Link } from 'react-router-dom'
import './css/entryPage.css'

const login = () => {
    return (
        <EntryPage>
            <PageHeader to="/"> 
                Motorify
                <i className='fas fa-car' />
            </PageHeader>
            <Card>
                <h1>Login</h1>
                <form onSubmit ={(e)=> e.preventDefault()}>
                    <InputGroup>  
                        <label >Email address</label>
                        <Input type="email" placeholder="Enter email" id="login-email" />
                    </InputGroup>

                    <InputGroup>  
                        <label>Password</label>
                        <Input type="password" placeholder="Enter password" id="login-password" />
                    </InputGroup>
                      
                    
                    <Button type="submit" >Login</Button>
                   
                </form>
                <span>
                    Don't have an account? 
                    <Link to='/sign-up'>  Signup</Link> 
                </span>
                
            </Card>
        </EntryPage>
    )
}

export default login
