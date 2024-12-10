import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div style={{height:'100%',width:'100%'}}>
    
        <div className='loginsignup'>
        <div className='loginsignup-container'>
            <h1>SignUp</h1>
            <div className='loginsignup-fields'>
                <input type='text' placeholder=' EnterYour Name'/>
                <input type='email' placeholder='Email Address'/>
                <input type='password' placeholder='Password'/>
            </div>
            <button>Continue</button>
            <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
            <div className='loginsignup-agree'>
                <input type='checkbox' name=" " id='agree'/>
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
        </div>      
    </div>
    </div>

  )
}

export default LoginSignup
