import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

export default function HousesErrors() {
    const error = useRouteError()
  return (
    <div className='houses-error'>
        <h2>Error!!!!</h2>
        <p>{error.message}</p>
        <Link to="/">Back to homepage</Link>
    </div>
  )
}
