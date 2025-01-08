import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainNavLink({name,path}) {
    // console.log(props);
    
  return (
    <NavLink className="nav-link" to={path}>{name}</NavLink>
  )
}
