import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <div className="flex bg-red-600 p-4 justify-between px-20">
            <nav className="flex justify-between w-3/5">
                <NavLink className="text-white" to="/home">
                    HOME
                </NavLink>
                <NavLink className="text-white" to="/">
                    CAUSES
                </NavLink>
                <NavLink className="text-white" to="/">
                    FEATURES
                </NavLink>
                <NavLink className="text-white" to="/">
                    SHOP
                </NavLink>
                <NavLink className="text-white" to="/">
                    GALLERY
                </NavLink>
                <NavLink className="text-white" to="/">
                    BLOG 
                </NavLink>
                <NavLink className="text-white" to="/">
                    CONTACT US
                </NavLink>
            </nav>
                <div className="w-1/5">
                    <input placeholder="Search" className="bg-red-500 text-white"></input>
                </div>
        </div>
    )
}
