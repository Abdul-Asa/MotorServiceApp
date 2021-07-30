import React, {useState} from 'react'
import Button from './Button'
import Card from './Card'
import Input from './Input'    
import InputGroup from './InputGroup'
import { EntryPage, PageHeader } from './entryPage'
import { Link } from 'react-router-dom'
// import {useDispatch} from 'react-redux'
// import './css/entryPage.css'

const Login = () => {


  
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    })
    
    
    const handleInput = (e) =>{
        const {name, value} = e.target

        setLoginInfo(inputDetails =>{
           return { ...inputDetails,
                   [name]: value
            }
        })
      
    }
      function validateForm() {
        return loginInfo.email.length > 0 && loginInfo.password.length > 0;
    }

    // const dispatch = useDispatch()

    const submitLogin = (e) =>{
        e.preventDefault()
        console.log(loginInfo)
        setLoginInfo({
        email: '',
        password: ''})
    }

    return (
        <EntryPage>
            <PageHeader to="/"> 
                Motorify
                <i className='fas fa-car' />
            </PageHeader>
            <Card>
                <h1>Login</h1>


                <form >
                    <InputGroup>  
                        <label >Email address</label>
                        <Input name='email' value={loginInfo.email} onChange={handleInput} autoComplete='off' type="email" placeholder="Enter email" id="login-email" />
                    </InputGroup>

                    <InputGroup>  
                        <label>Password</label>

                    
                        <Input name='password' value={loginInfo.password} onChange={handleInput} autoComplete='off' type="password" placeholder="Enter password" id="login-password" />
                    </InputGroup>
                      
                    
                    <Button type="submit"onClick={submitLogin} disabled={!validateForm()}>Login</Button>

                   
                </form>
                <span>
                    Don't have an account? 
                    <Link to='/sign-up'>  Signup</Link> 
                </span>
                
            </Card>
        </EntryPage>
    )
}

export default Login
