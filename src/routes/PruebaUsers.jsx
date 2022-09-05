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


const firestore = getFirestore(app);

const PruebaUsers =  ()=>{
    const [usuariosD,setUsuariosD] = useState([])
    

    useEffect(() => {
      const fetchData = async () => {
        let list = [];
        try{
            const querySnapshot =  await getDocs(collection(firestore, "userDetails"));
            querySnapshot.forEach((doc) => {
             list.push(doc.data())})
             setUsuariosD(list)
             console.log(list)
        }catch (err){
            console.log(err);
        }
      }
      fetchData();

    }, [])
    



    console.log("USUARIOS",usuariosD)

    return (
        <div>{usuariosD.map((usuario)=>{
            return(
                <div>
                    <p key={usuario.email}>{usuario.name}</p>
                    <p key={usuario.email+1}>{usuario.isAdmin}</p>
                </div>
            )
 
        })}</div>
    )

}

export default PruebaUsers;