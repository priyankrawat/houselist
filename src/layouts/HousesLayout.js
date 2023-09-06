import React from 'react'
import { Outlet } from 'react-router-dom'

export default function HousesLayout() {
  return (
    <div className='houses-layout'>
        <h2>View Houses here!</h2>

        <Outlet />
    </div>
  )
}
