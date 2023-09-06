import { useState } from "react"
import { Navigate } from "react-router-dom"

export default function About() {

  const [user,setUser] = useState('Priyank')
  if(!user){
    return <Navigate to = "/" replace = {true} />
  }

  return (
    <div className="about">
        <h2>About Us</h2>
        <p>Just some about us description for the website.</p>

        <button onClick={() => setUser(null)}>Logout User</button>
    </div>
  )
}
