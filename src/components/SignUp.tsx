import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useSignUp } from "../hooks/useSignUp"

export const SignUp = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {signup, isLoading, errors, resetErrors} = useSignUp();


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
    
        resetErrors();

        await signup(username, email, password).then((data) => {
            console.log("Full signup response:", data);
            console.log("Errors object:", errors);
    
            // More explicit error checking
            if (!data?.errors && !errors) {
                setEmail('');
                setPassword('');
                setUsername('');
                navigate('/explore', { replace: true });
            }
        });
            // if(!errors){
            //     setEmail('');
            //     setPassword('');
            //     setUsername('');
            //     navigate('/explore', { replace: true });
            // }
            // if (!errors?.password && !errors?.username && !errors?.email && !errors?.message) {
            //     setEmail('');
            //     setPassword('');
            //     setUsername('');
            //     navigate('/explore', { replace: true });
            // }

            //Check for validation errors
            // if (!Object.values(errors || {}).some(error => error)) {
            //     setEmail('');
            //     setPassword('');
            //     setUsername('');
            //     navigate('/explore', { replace: true });
            // }


    }

  return (
    <form className="signup-form" onSubmit={handleSubmit} >
    <div className='getStarted' style={{ borderBottom: '1px solid gray', paddingBottom: '30px' }}>
        
        <h2 style={{  margin: 0, padding: 0 }}>Get Started, Signup</h2>
        <p style={{ fontSize: "15px", fontWeight: "500", margin: 0, padding: 0, color: 'gray' }}>Welcome To Navia, Let's Create your account</p>

    </div>


    <label className='form-content' htmlFor='username' style={{  margin: 0, padding: 0, paddingTop: "30px" }}> 
        <p style={{ fontSize: "15px", fontWeight: "600", margin: 0, padding: 0 }}>Username</p>
    </label>
    <input onChange={(e) => { setUsername(e.target.value) }} value={username} name='username' type='text' required />
    { errors?.username && <div className='email error'>{errors.username}</div> }


    <label className='form-content' htmlFor='email' style={{  margin: 0, padding: 0 }}> 
       <p style={{ fontSize: "15px", fontWeight: "600", margin: 0, padding: 0 }}>Email</p>
    </label>
    <input onChange={(e) => { setEmail(e.target.value) }} value={email} name='email' type='email' required />
    { errors?.email && <div className='email error'>{errors.email}</div> }


    <label className='form-content' htmlFor='password' style={{  margin: 0, padding: 0}}> 
       <p style={{ fontSize: "15px", fontWeight: "600", margin: 0, padding: 0 }}>Password</p>
    </label>
    <input onChange={(e) => { setPassword(e.target.value) }} value={password} name='password' type='password' required />
    { errors?.password && <div className='email error'>{errors.password}</div> }

    {errors?.message && <div className='email error'>{errors.message}</div>}


    <button type='submit' className='signup-btn' disabled= {isLoading} >{isLoading? "Submitting":"Signup"}</button>
    <p style={{ fontSize: "15px", fontWeight: "500", margin: 0, padding: 0, color: 'gray' }}>Already Have An Account? 
        <Link to="/register/login" style={{ fontSize: "15px", fontWeight: "500", margin: 0, paddingLeft: "4px", color: 'black' }}>Log In</Link>
    </p>
    {/* </div> */}
    </form>
  )
}
