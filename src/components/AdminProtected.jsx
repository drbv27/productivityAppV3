import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import useUsersDB from '../hooks/useUsersDB,js'

const AdminProtected = ({children}) => {
    const {user} = UserAuth()
    const {userDetails,setuserDetails} = useUsersDB(user)
    console.log(userDetails);

    if (!userDetails){
        return<Navigate to='/' />
    }
  return (
    children
  )
}

export default AdminProtected