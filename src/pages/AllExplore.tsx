import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/AllExplore.css'
import Gabriel from "../assets/images/gabriel-silverio-K_b41GaWC5Y-unsplash.jpg";
import JC from "../assets/images/jc.jpg";
import Pawel from "../assets/images/pawel.jpg";
import Avail from "../assets/images/avail.jpg";
import Sanju from "../assets/images/sanju.jpg";
import Averie from "../assets/images/averie.jpg";

export const AllExplore = () => {
  return (
    <div className = "explore-main">
        <div className="explore-firsthalf">
            <div className=" explore-firsthalf firstcard"  style={{ 
                    backgroundImage: `url(${Gabriel})`,
                    backgroundSize: "cover", // Ensures the image covers the div while maintaining aspect ratio
                    backgroundPosition: "center", // Centers the image within the div
                    backgroundRepeat: "no-repeat", // Prevents the image from repeating
                    }}>
                <div>
                    <h2 style={{ fontSize: "28px", color: "white" }}>GET UP TO 50% OFF</h2>
                    <Link to="/" className='discount-btn'> Get Discount</Link>
                </div>
            </div>
            <div className="explore-firsthalf secondcard"  style={{ 
                    backgroundImage: `url(${Pawel})`,
                    backgroundSize: "cover", // Ensures the image covers the div while maintaining aspect ratio
                    backgroundPosition: "center", // Centers the image within the div
                    backgroundRepeat: "no-repeat", // Prevents the image from repeating
                    }}>
                <div className="winter-weekend">
                    <h2 style={{ fontSize: "28px", margin: 0, color: "lightgray" }}>Winter's Weekend</h2>
                    <p style={{ fontSize: "15px", fontWeight: "600", margin: "4px" }}> Keep It Casual</p>
                </div>
            </div>
            <div className="explore-firsthalf thirdcard">
                <div className="offers"  style={{ 
                    backgroundImage: `url(${Avail})`,
                    backgroundSize: "cover", // Ensures the image covers the div while maintaining aspect ratio
                    backgroundPosition: "center", // Centers the image within the div
                    backgroundRepeat: "no-repeat", // Prevents the image from repeating
                    }}>
                    <div className="offers-btn">
                        <button className='offers-btnbtn' style={{  border: 'none', color: 'inherit'}}>
                            <p style={{ fontSize: "14px", fontWeight: "600", color: "white" }}>Available Offers</p>
                        </button>
                    </div>
                </div>

                <div className="favorites">
                    <div className='favorites-btn'>
                        <button className='favorites-btnbtn' style={{  border: 'none', color: 'inherit'}}>
                            Favorites   
                        </button>
                    </div>
                    <div
  className="seeAll"
  style={{
    position: "relative", // Necessary for positioning the pseudo-element
    overflow: "hidden", // Ensures the blur doesn’t spill outside the div
    // height: "300px", // Define a height for the div
    borderRadius: "15px", // Optional: Adds rounded corners
  }}
>
  {/* Background image with blur using a pseudo-element */}
  <div
    style={{
      backgroundImage: `url(${Sanju})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      filter: "blur(5px)", // Applies the blur effect
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      //zIndex: -1, // Ensures the background stays behind the content
    }}
  />
  {/* Content */}
  <div style={{ position: "relative", color: "white", fontSize: "24px", fontWeight: "bold", justifyContent: "center", alignItems: "center" }}>
    See All
  </div>
</div>

                </div>
            </div>
        </div>

        <div className='explore-secondhalf'>
            <div className="explore-secondhalf firstsecond">

                <div className=" explore-secondhalf firstcard " style={{ 
                    backgroundImage: `url(${Gabriel})`,
                    backgroundSize: "cover", // Ensures the image covers the div while maintaining aspect ratio
                    backgroundPosition: "center", // Centers the image within the div
                    backgroundRepeat: "no-repeat", // Prevents the image from repeating
                    }}>
                    <div className='rubberSandals' >
                        <p style={{ fontSize: "15px", fontWeight: "600", color: "lightgray" }}>Our Picks</p>
                        <div style={{ display: "flex", alignContent: "center"  }}>
                            <h2 style={{ margin: 0, fontSize: "22px", color: "white"}}> WMX Rubber Zebra Sandals </h2>
                            <h2 style={{ color:"white", margin: "auto 0px", padding:"10px 15px", fontSize: "18px", borderRadius: "25px", backgroundColor:"blue", alignContent:"center"}}>$32</h2>
                        </div>
                    </div>
                </div>
                <div className="explore-secondhalf secondcard"  style={{ 
                    backgroundImage: `url(${JC})`,
                    backgroundSize: "cover", // Ensures the image covers the div while maintaining aspect ratio
                    backgroundPosition: "center", // Centers the image within the div
                    backgroundRepeat: "no-repeat", // Prevents the image from repeating
                    }}>
                    <div className='superskinny'>
                        <p style={{ fontSize: "15px", fontWeight: "600", color: "lightgray" }}>Your Choice</p>
                        <div style={{ display: "flex", alignContent: "center" }}>
                            <h2 style={{ margin: 0, fontSize: "22px", color: "white"}}> Supper Skinny Jogger In Brown </h2>
                            <h2 style={{ color:"white", margin: "auto 0px", padding:"10px 15px", fontSize: "18px", borderRadius: "25px", backgroundColor:"blue", alignContent:"center"}}>$32</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="explore-secondhalf thirdcard" style={{ 
                    backgroundImage: `url(${Averie})`,
                    backgroundSize: "cover", // Ensures the image covers the div while maintaining aspect ratio
                    backgroundPosition: "center", // Centers the image within the div
                    backgroundRepeat: "no-repeat", // Prevents the image from repeating
                    }}>
                <button className='arrow' style={{  border: 'none', color: 'inherit'}}>Button</button>
                <div className="bold-fashion">
                        <h2 style={{ fontSize: "28px", margin: 0, color:"white" }}>Bring Bold Fashion</h2>
                        <p style={{ fontSize: "15px", fontWeight: "600", margin: "4px" }}> Layers On Layers</p>
                </div>
            </div>
        </div>

    </div>
  )
}
