import React from "react";


export default function Registration() {
    return (
        <div className='content'>
            <h2>Sign up with your email address</h2>
            <form className='form'>
                <div className='form-row'>
                    <label className='form-label'>
                        What's your email?
                    </label>
                    <input className='form-input' type='email' placeholder='Enter your email.' />
                </div>
                <div className='form-row'>
                    <label className='form-label'>
                        Password
                    </label>
                    <input className='form-input' type='password' placeholder='Create a password.' />
                </div>
                <div className='form-row'>
                    <label className='form-label'>
                        Repeat your password
                    </label>
                    <input className='form-input' type='password' placeholder='Enter your password again.' />
                </div>
                <div className='form-row'>
                    <label className='form-label'>
                        What should we call you?
                    </label>
                    <input className='form-input' type='text' placeholder='Enter a profile name.' />
                </div>
                <div className='form-group'>
                    <button className='btn btn-login btn-signup'>Sign up</button>
                </div>
                
                    Have an account?
                    
                <a lassName='link'>Log in</a>
            </form>
        </div>
    )
}