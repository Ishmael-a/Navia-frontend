
import React from 'react';
import { Outlet } from 'react-router-dom';
import "../styles/LoginSignup.css";
import Signup from "../assets/images/signup.jpg";

export const LoginSignup = () => {
  return (
    <>
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="form-div">
          <Outlet/>
        </div>

        <div className='second-div'  style={{ 
                    backgroundImage: `url(${Signup})`,
                    backgroundSize: "cover", // Ensures the image covers the div while maintaining aspect ratio
                    backgroundPosition: "center", // Centers the image within the div
                    backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}>
          {/* <div>LoginSignup</div> */}
        </div>


      </div>
    </div>
    </>
  )
}
