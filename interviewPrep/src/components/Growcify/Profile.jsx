import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <h1>User Profile</h1>

        <ul>
            <li><Link to={"/billing"}>User Billing</Link></li>
            <li><Link to={"/setting"}>User Setting</Link></li>
        </ul>
    </div>
  )
}

export default Profile