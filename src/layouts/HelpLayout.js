import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className="help-layout">
        <h2>Help Page</h2>
        <p>This is the hep page of the website!</p>

        <nav>
            <NavLink to="faq">FAQ</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}
