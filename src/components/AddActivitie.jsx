import React from 'react'
import { UserAuth } from '../context/AuthContext';

const AddActivitie = () => {
  const {user} = UserAuth()
  /* console.log(user.email) */
  return (
    <div>
      <p>AddActivitie</p>
      <p>{user.email}</p>
    </div>
  )
}

export default AddActivitie