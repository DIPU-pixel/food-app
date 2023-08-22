import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './ProfileClass';

const About = () => {
  return (
    <div>
        <h1>About us page</h1>
        <Outlet/>

        <p>About us pending</p>
        <Profile/>
    </div>
  )
}

export default About