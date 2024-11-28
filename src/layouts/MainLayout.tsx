
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/SideBar';
import cartImage from '../assets/icons/cartImage.png'


type MainLayoutProp = {
  children: React.ReactNode;
}


export const MainLayout = (props: MainLayoutProp) => {

  const [isSidebarClosed, setIsSideBarClosed] = useState<Boolean>(true);

  const toggleSidebar = () => {
    setIsSideBarClosed(!isSidebarClosed);
  }

  return (
    <>
      <SideBar isClosed = {isSidebarClosed } setIsClosed = { setIsSideBarClosed }/>
      <nav className={` ${isSidebarClosed? 'nav':'nav-withMargin'} `}>

        <button onClick={toggleSidebar} style={{ background: 'none', border: 'none', color: 'inherit', marginRight: '10px' }}>
          <h1 >NAVIA</h1>
        </button>

        <input type='text' placeholder='search' className="nav-search" />

        <ul>
          <li>Welcome email</li>  
          <li  className='cart-button' >
            <img src={cartImage} style={{ width: "20px", height:"20px" }} alt="cartImage"/>
            <h3>Cart</h3>
          </li>  
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup" className="btn">Sign Up</Link></li>
        </ul>
      </nav>

      <div className={` ${isSidebarClosed? 'children':'children-withMargin'} `}>
        {props.children}
      </div>


      <footer>Copyright 2020 Compton Rogue Inc.</footer>
    </>
  )
}
