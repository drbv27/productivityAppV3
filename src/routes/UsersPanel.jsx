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
        <h2>Prueba</h2>
        <div className='max-w-[1140px] mx-auto'>
            <div className='bg-secondary flex flex-col justfiy-between items-center my-5 py-8 px-4 rounded-xl'>
                <SearchUser usuariosD={usuariosD}/>
            </div>
        </div>

        </>
    )

}

export default UsersPanel;