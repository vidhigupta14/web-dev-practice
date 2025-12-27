import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <ul>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/"><li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"red":""}} to="/about"><li>About</li></NavLink>
        </ul>
    </div>
  )
}

export default Nav