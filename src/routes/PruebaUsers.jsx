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


const firestore = getFirestore(app);

const PruebaUsers =  ()=>{
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
    



    /* console.log("USUARIOS",usuariosD) */

    return (
        <>
        <Navbar/>
        <h2>Prueba</h2>
        <div>{usuariosD.map((usuario)=>{
            return(
                <div>
                    <p key={usuario.details.email}>{usuario.details.name} {usuario.details.lastname} {usuario.details.workArea}</p>

                </div>
            )
 
        })}</div>
        </>
    )

}

export default PruebaUsers;