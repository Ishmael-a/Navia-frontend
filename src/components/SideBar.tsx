import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/SideBar.css';


type SideBarProps = {
    isClosed: Boolean;
    setIsClosed: (value: Boolean) => void;
}

const SideBar = (props: SideBarProps) => {
    const {isClosed, setIsClosed} = props;

    const handleClose = () => {
        setIsClosed(!isClosed);
    }

  return (
    <div className={`${isClosed? 'sidebar-closed': 'sidebar'}`}>
        <div className='top-content'>
            <a href=""> SideBar</a>

            <button onClick={handleClose} className='toggle-btn'>
                Close
            </button>
        </div>

        <div className="bottom-content">
            <NavLink to="/about" className = {({isActive}) => ( isActive? "activeNavlink": "navlink")}>
                Dashboard
            </NavLink>
            <NavLink to="/about" className = {({isActive}) => ( isActive? "activeNavlink": "navlink")}>
                Categories
            </NavLink>
            <NavLink to="/about" className = {({isActive}) => ( isActive? "activeNavlink": "navlink")}>
                Orders
            </NavLink>

            <br></br>

            <NavLink to="/about" className = {({isActive}) => ( isActive? "activeNavlink": "navlink")}>
                Notifications
            </NavLink>
            <NavLink to="/about" className = {({isActive}) => ( isActive? "activeNavlink": "navlink")}>
                Help & Support
            </NavLink>
            <NavLink to="/about" className = {({isActive}) => ( isActive? "activeNavlink": "navlink")}>
                Settings
            </NavLink>

            <br></br>

            <NavLink to="/" className='logout-btn'>Log Out</NavLink>

        </div>


    </div>
  )
}

export default SideBar