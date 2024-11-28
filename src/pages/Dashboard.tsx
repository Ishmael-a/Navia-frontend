import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "../styles/Dashboard.css"

export const Dashboard = () => {
  return (
    <div>
        <header style={{borderBottom: "4px solid lightgray", paddingBottom: "16px"}} >
            {/* <div className="smoothie"> */}
                <h1>   
                  Explore
                </h1>
            {/* </div>  */}

            <div className="headings">
                <Link to="/explore" className="btn" style={{padding:"20px 60px",color:"gray", backgroundColor:"rgba(238, 130, 238, 0.5)", borderRadius:"35px"}}>All</Link>
                <Link to="/" className="btn" style={{padding:"20px 60px",color:"gray", backgroundColor:"rgba(238, 130, 238, 0.5)", borderRadius:"35px"}}>Men</Link>
                <Link to="/" className="btn" style={{padding:"20px 60px",color:"gray", backgroundColor:"rgba(238, 130, 238, 0.5)", borderRadius:"35px"}}>Women</Link>
            </div>

            <div>
                <button className="btn" style={{padding:"20px 60px",border:"none", color:"black", backgroundColor:"rgba(238, 130, 238, 0.5)", borderRadius:"35px"}}>
                    <p>Filters</p>
                </button>
            </div>
        </header>

        <Outlet/>
    </div>
  )
}
