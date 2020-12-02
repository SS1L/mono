import React from "react";
import './index.css';

export default function Login() {
    return (
        <div className='content'>
            <h1>MONO</h1>

            <div className='reg-text'>
                <h5>To continue, log in to Mono.</h5>
            </div>

            <div className='top'>
                <a className='btn'>CONTINUE WITH GOOGLE</a>
            </div>
            <p>OR</p>

            <form className='form'>
                <div className='form-row'>
                    <label className='form-label'>
                        Email address or username
                    </label>
                    <input className='form-input' type='text' placeholder='Email address or username' />
                </div>
                <div className='form-row'>
                    <label className='form-label'>
                        Password
                    </label>
                    <input className='form-input' type='password' placeholder='Password' />
                </div>
                <div className='form-link'>
                    <a className='link'>Forgot your password?</a>
                </div>
                <div className='form-group'>
                    <div className='form-col'>
                        <input type='checkbox'/>
                        Remember me
                    </div>
                    <div className='form-col'>
                        <button className='btn btn-login'>LOG IN</button>
                    </div>
                </div>
            </form>

            <div>
                <hr></hr>
                <h4 className='reg-text'>Don't have an account?</h4>
                <div className='top'>
                    <a className='btn'>SIGN UP FOR MONO</a>
                </div>
            </div>
        </div>
    )
}