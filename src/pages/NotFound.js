import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h2>404, Page not Found</h2>
        <p>Go to the <NavLink to ="/">Home Page</NavLink>.</p>
    </div>
  )
}
