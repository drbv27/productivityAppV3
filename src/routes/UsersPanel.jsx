import { useState,useEffect} from "react";

import app from "../firebase";
import {
    collection,
    getFirestore,
    getDocs,
    deleteDoc,
    doc,
    onSnapshot,
    query,where,
  } from "firebase/firestore";
import Navbar from "../components/Navbar";
import SearchUser from "../components/SearchUser";
import Edi from "../assets/img/EDI_RELAJADO.png"


const firestore = getFirestore(app);

const UsersPanel =  ()=>{
    const [usuariosD,setUsuariosD] = useState([])
    

    useEffect(() => {
      const fetchData = async () => {
        let list = [];
        try{
            const querySnapshot =  await getDocs(collection(firestore, "usersActivities"));
            querySnapshot.forEach((doc) => {
             list.push(doc.data())})
             setUsuariosD(list)
             /* console.log(list) */
        }catch (err){
            console.log(err);
        }
      }
      fetchData();

    }, [])
    



    console.log("USUARIOS",usuariosD)

    return (
        <>
        <Navbar/>
        <fieldset className='bg-secondary py-5 px-2 rounded-2xl shadow-xl mx-4 mt-10'>
        <legend className='text-3xl flex'>Usuarios  <img src={Edi} alt="" className='ml-2 w-16'/></legend>
            <div className='bg-secondary flex flex-col justfiy-between items-center my-5 py-2 px-4 rounded-xl'>
                <SearchUser usuariosD={usuariosD}/>
            </div>
   
        </fieldset>

        </>
    )

}

export default UsersPanel;