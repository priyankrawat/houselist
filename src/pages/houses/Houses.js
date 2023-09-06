import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'


export default function Houses() {
const houses = useLoaderData()
  return (
    <div className='houses'>
        {houses.map((house) => (
            <Link to={house.id.toString()} key={house.id}>
                <p>{house.title}</p>
                <p>Based in {house.location}</p>
            </Link>
        ))}
    </div>
  )
}


export const housesloader = async () =>{
    const res = await fetch('http://localhost:4000/hotels')

    if (!res.ok){
        throw Error('could not fetch houses')
    }
    return res.json()
}