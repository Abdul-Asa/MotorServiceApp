import React, { useState } from 'react';
import Button from './Button'
import Card from './Card'
import Input from './Input'    
import InputGroup from './InputGroup'
import { EntryPage, PageHeader } from './entryPage'
import { Link } from 'react-router-dom'
import './css/entryPage.css'
import { AiOutlineEye, AiFillEye } from 'react-icons/ai';

const Signup = () => {
    const [password, setPassword] = useState('');
    const [inputType, setInputType] = useState('password');
    
    return (
        <EntryPage>
        <PageHeader to="/"> 
            Motorify
            <i className='fas fa-car' />
        </PageHeader>
        <Card>
            <h1>Sign up</h1>
            <form onSubmit ={(e)=> e.preventDefault()}>
                <InputGroup>  
                    <label>First Name</label>
                    <Input type="text" placeholder="First Name" id="signup-firstname" />
                </InputGroup>

                <InputGroup>  
                    <label>Last Name</label>
                    <Input type="text" placeholder="Last Name" id="signup-lastname" />
                </InputGroup>

                <InputGroup>  
                    <label>Email Address</label>
                    <Input type="email" placeholder="Enter email" id="signup-email" />
                </InputGroup>
                  
                <InputGroup>  
                    <div className="label-eye-wrapper">
                        <label>Password</label>
                        {inputType === "password" 
                            ? 
                            <AiOutlineEye onClick={() => setInputType('text')} />
                            : 
                            <AiFillEye onClick={() => setInputType('password')} />
                        }
                    </div>
                   
                    <Input 
                        type={inputType} placeholder="Enter password" id="signup-password" 
                        value = {password}
                        onChange = {(e)=>setPassword(e.target.value)}
                    />
                </InputGroup>
                
                <Button type="submit">Sign Up</Button>
               
            </form>
            <span>
                Already have an account? 
                <Link to='/login'>  Login</Link> 
            </span>
            
        </Card>
    </EntryPage>
    )
}

export default Signup
