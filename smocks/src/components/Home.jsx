import React from 'react'
import user from '../images/user.png';
import { NavLink } from "react-router-dom"

function Home() {
  return (
    <div className='mainGrid'>
        <div className='grid1'>
        <NavLink to="/signup">
                <img src={user} alt="student"/>
                <h4>Login as Student</h4>
        </NavLink>
        </div>

        <div className='grid1'>
        <NavLink to="/login">
                <img src={user} alt="student"/>
                <h4>Login as Admin</h4>
        </NavLink>
        </div>

        <div className='grid1'>
            <NavLink to="/signup">
                <img src={user} alt="student"/>
                <h4>Login as Alumni</h4>
            </NavLink>
        
        
        </div>
    </div>
  )
}

export default Home