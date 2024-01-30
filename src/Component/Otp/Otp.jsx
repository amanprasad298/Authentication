import React from 'react'
import './Otp.css'
import { Link } from 'react-router-dom'

const Otp = () => {

    const handleInputChange = (e) => {
        const input = e.target;
        const inputValue = input.value.replace(/\D/g, '');
        input.value = inputValue.slice(0,1);
    }

return (
    <div className="otp-form">
        <div className='container d-flex justify-content-center align-items-center otp'>
            <div className="card p-5">
                <div className="text-center">
                    <h1>Enter OTP</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <div className="form text-start pt-5">
                        <div class="mb-3 d-flex gap-2">
                            <input type="text" className="form-control text-center" id="formGroupExampleInput" onInput={handleInputChange}/>
                            <input type="text" className="form-control text-center" id="formGroupExampleInput" onInput={handleInputChange}/>
                            <input type="text" className="form-control text-center" id="formGroupExampleInput" onInput={handleInputChange}/>
                            <input type="text" className="form-control text-center" id="formGroupExampleInput" onInput={handleInputChange}/>
                            <input type="text" className="form-control text-center" id="formGroupExampleInput" onInput={handleInputChange}/>
                            <input type="text" className="form-control text-center" id="formGroupExampleInput" onInput={handleInputChange}/>
                        </div>
                        
                    </div>
                    <div class="mt-4">
                        <Link to='/reset-pass'><button class="btn btn-primary w-100 ">Reset</button></Link>
                    </div>
                    <div className="text-center mt-4">
                        <p>Remeber Now? <Link to='/'>Login now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Otp