import React, {useState} from 'react';
import {Link} from "react-router-dom";


export const Login = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
    
      }


  return (
    <form className="signup-form" onSubmit={handleSubmit} >
        <div className='getStarted' style={{ borderBottom: '1px solid gray', paddingBottom: '30px' }}>
            
            <h2 style={{  margin: 0, padding: 0 }}>Login</h2>
            <p style={{ fontSize: "15px", fontWeight: "500", margin: 0, padding: 0, color: 'gray' }}>Welcome To BuyMore, Login For The Best Experience</p>


        </div>

        {/* <hr style={{ backgroundColor: "gray", color: "gray"}}/> */}

        {/* <div className='form'> */}




        <label className='form-content' htmlFor='email' style={{  margin: 0, padding: 0 }}> 
        <p style={{ fontSize: "15px", fontWeight: "600", margin: 0, padding: 0 }}>Email</p>
        </label>
        <input onChange={(e) => { setEmail(e.target.value) }} value={email} name='email' type='email' required />
        {/* {errors?.email && <div className='email error'>{errors.email}</div>} */}


        <label className='form-content' htmlFor='password' style={{  margin: 0, padding: 0}}> 
        <p style={{ fontSize: "15px", fontWeight: "600", margin: 0, padding: 0 }}>Password</p>
        </label>
        <input onChange={(e) => { setPassword(e.target.value) }} value={password} name='password' type='password' required />
        {/* {errors?.password && <div className='email error'>{errors.password}</div>} */}

        {/* {errors?.message && <div className='email error'>{errors.message}</div>} */}


        <button type='submit' className='signup-btn'>Signup</button>
        <p style={{ fontSize: "15px", fontWeight: "500", margin: 0, padding: 0, color: 'gray' }}>New To BuyMore? 
            <Link to="/register/signup" style={{ fontSize: "15px", fontWeight: "500", margin: 0, paddingLeft: "4px", color: 'black' }}>Register</Link>
        </p>
        {/* </div> */}
    </form>
  )
}
