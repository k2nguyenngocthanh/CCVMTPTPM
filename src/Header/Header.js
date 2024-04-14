import React from 'react'
import { NavLink } from 'react-router-dom'
import UserMenu from './UserMenu'
import NavMenu from './NavMenu'


export default function Header() {
    return <div className='h-20 shadow w-full'>
    <div className="container mx-auto h-full flex items-center justify-between">
        <NavLink to="/">
        <span className='font-medium text-2xl text-red-500 animate-pulse'>TT-Film</span>
        </NavLink>
        <NavMenu/>
        <UserMenu/>
        
    </div>
  </div>
  
}
