import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function HouseDetails() {
    const house = useLoaderData()
  return (
    <div className="houses-details">
        <h2>House details for {house.title}</h2>
        <p>House Price: Rs. {house.price}</p>
        <p>Location: {house.location}</p>

        <div className='details'>
            <p>THis is the best Villa in the locality</p>
        </div>
    </div>
  )
}

export const houseDetailsLoader = async ({ params }) => {

    const { id } = params

    const res = await fetch ('http://localhost:4000/hotels/' + id)
    if(!res.ok){
        throw Error('Failed to fetch details')
    }
    return res.json()
}
