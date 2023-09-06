import React from 'react'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import About from './pages/About'
import HelpLayout from './layouts/HelpLayout'
import Faq from './pages/help/Faq'
import Contact, { contactAction } from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Houses, { housesloader } from './pages/houses/Houses'
import HouseDetails, { houseDetailsLoader } from './pages/houses/HouseDetails'
import HousesLayout from './layouts/HousesLayout'
import HousesErrors from './pages/houses/HousesErrors'

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element = {<RootLayout />}>
        <Route path="/" element = {<Home />} />
        <Route path="about" element = {< About/>} />
        <Route path="help" element = {<HelpLayout />} >
            <Route path="faq" element = {<Faq />} />
            <Route path="contact" element = {<Contact />} action={contactAction} />
        </Route>
        <Route path="houselist" element ={<HousesLayout />} errorElement={<HousesErrors/>}>
          <Route path="" element={<Houses/>} loader={housesloader} />
          <Route path=":id" element={<HouseDetails />} loader={houseDetailsLoader}/>
        </Route>
        <Route path="*" element = {<NotFound />} />
       
      </Route>
    )
  )


  return (
    <RouterProvider router={router} />
  )
}
