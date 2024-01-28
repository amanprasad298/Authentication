import React from 'react'
import './Forgot.css'
import { Link } from 'react-router-dom'

const Forgot = () => {
return (
    <div className="forgot-form">
        <div className='container d-flex justify-content-center align-items-center forgot-pass'>
            <div className="card p-5">
                <div className="text-center">
                    <h1>Forgot Password!</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <div className="form text-start pt-5">
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Email</label>
                            <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter Email Address"/>
                        </div>
                        
                    </div>
                    <div class="mt-4">
                        <button class="btn btn-primary w-100 ">Send OTP</button>
                    </div>
                    <div className="text-center mt-4">
                        <p>Don't have an account? <Link to='/signup'>Signup now</Link></p>
                    </div>
                    <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
                        <div className="line"></div>
                        <div className="or"><p>or</p></div>
                        <div className="line"></div>
                    </div>
                    <div class="mt-3">
                        <button className="btn btn-outline-secondary w-100">
                        <i class="fa-brands fa-google mx-2"></i> Sign In with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Forgot