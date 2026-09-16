import "./Nav.css"
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <ul>
        <NavLink className={(e)=>{return e.isActive? "active": ""}} to="/">Home</NavLink>
        <NavLink className={(e)=>{return e.isActive? "active": ""}} to="/About">About</NavLink>
        <NavLink className={(e)=>{return e.isActive? "active": ""}} to="/Contact">Contact</NavLink>
      </ul>
    </div>
  )
}

export default Nav
