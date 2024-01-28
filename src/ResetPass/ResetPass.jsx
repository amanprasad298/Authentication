import React from 'react'
import './ResetPass.css'
import { Link } from 'react-router-dom'

const ResetPass = () => {

return (
    <div className="reset-form">
        <div className='container d-flex justify-content-center align-items-center reset'>
            <div className="card p-5">
                <div className="text-center">
                    <h1>Reset Password</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <div class="mt-5">
                            
                            <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Enter Password"/>
                        </div>
                        <div class="mt-3">
                            
                            <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Re-Enter Password"/>
                        </div>
                    <div class="mt-4">
                        <Link to='/'><button class="btn btn-primary w-100 ">Save</button></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default ResetPass