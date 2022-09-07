import React,{useEffect,useState} from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import useUsersDB from '../hooks/useUsersDB,js'

const AdminProtected = ({children}) => {
    const [ingreso,setIngreso] = useState(false)
    const {user} = UserAuth()
    const {userDetails,setuserDetails} = useUsersDB(user)
 /*    console.log("protegido",userDetails);
    console.log("detalle",userDetails.isAdmin); */

/*     if (userDetails && !!userDetails.isAdmin){
        return<Navigate to='/' />
    } */

/*   return (
    children
  ) */


/*   useEffect(() => {
    if (!!userDetails.isAdmin){
        return( children )
    }
    return<Navigate to='/' />
  }, [userDetails]) */

  useEffect(()=>{
    function ingreso(){
        setIngreso(!!userDetails.isAdmin)
    }
    ingreso();
    },[userDetails]);
    
  if(ingreso){
    return<Navigate to='/' /> 
  }
  return(
    children
  )
}



export default AdminProtected