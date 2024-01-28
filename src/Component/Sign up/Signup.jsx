import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
return (
    <div className="signup-form">
        <div className='container d-flex justify-content-center align-items-center signup'>
            <div className="card p-5">
                <div className="text-center">
                    <h1>Create Account</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <div className="form text-start pt-5">
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Name</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Your Name"/>
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Email</label>
                            <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter Email Address"/>
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput" class="form-label">Mobile Number</label>
                            <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Enter Mobile Numner"/>
                        </div>
                        <div class="mt-3">
                            <label for="formGroupExampleInput2" class="form-label">New Password</label>
                            <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Enter Password"/>
                        </div>
                        <div class="mt-3">
                            <label for="formGroupExampleInput2" class="form-label">Re-enter New Password</label>
                            <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Enter Re-enter Password"/>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button class="btn btn-primary w-100 ">Signup</button>
                    </div>
                    <div className="text-center mt-4">
                        <p>Already have an account? <Link to='/'>Login now</Link></p>
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

export default Signup