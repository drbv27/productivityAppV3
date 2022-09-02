import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  import React, { useState, useEffect } from "react";
   
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
   
  function BarChartGraphic({tasksArray}) {

    let datos=[
        {
            macroproceso:"Gerencia",
            cantidad:0,
        },
        {
            macroproceso:"Administrativo",
            cantidad:0,
        },
        {
            macroproceso:"Contable",
            cantidad:0,
        }
    ]
    const [userData,setUserData] = useState({
        labels: datos.map((data)=>data.macroproceso),
        datasets:[{
            label:"Sin Datos",
            data:datos.map((data)=>data.cantidad),

        }],
    })
    let newData =[]
    /* console.log(tasksArray) */
    /* console.log(originalInitialFilter) */
   
    const [chartOptions, setChartOptions] = useState({});


     useEffect(()=>{
        new Promise((resolve,reject)=>{
            if(tasksArray){
                resolve(
                    newData = [
                        {
                            macroproceso:"Gerencia",
                            cantidad:tasksArray.filter((item)=>{return(item.Macroprocess==="Gerencia")}).map((item2)=>item2.activitieDuration).reduce((prev,curr)=>prev+curr,0),
                        },
                        {
                            macroproceso:"Administrativo",
                            cantidad:tasksArray.filter((item)=>{return(item.Macroprocess==="Administrativo")}).map((item2)=>item2.activitieDuration).reduce((prev,curr)=>prev+curr,0),
                        },
                        {
                            macroproceso:"Contable",
                            cantidad:tasksArray.filter((item)=>{return(item.Macroprocess==="Contable")}).map((item2)=>item2.activitieDuration).reduce((prev,curr)=>prev+curr,0),
                        },
                        {
                            macroproceso:"Innovación",
                            cantidad:tasksArray.filter((item)=>{return(item.Macroprocess==="Innovación")}).map((item2)=>item2.activitieDuration).reduce((prev,curr)=>prev+curr,0),
                        },
                        {
                            macroproceso:"Educación Tecnológica",
                            cantidad:tasksArray.filter((item)=>{return(item.Macroprocess==="Educación Tecnológica")}).map((item2)=>item2.activitieDuration).reduce((prev,curr)=>prev+curr,0),
                        },
                        {
                            macroproceso:"Jurídico",
                            cantidad:tasksArray.filter((item)=>{return(item.Macroprocess==="Jurídico")}).map((item2)=>item2.activitieDuration).reduce((prev,curr)=>prev+curr,0),
                        },
                        {
                            macroproceso:"Mercadeo y ventas",
                            cantidad:tasksArray.filter((item)=>{return(item.Macroprocess==="Mercadeo y ventas")}).map((item2)=>item2.activitieDuration).reduce((prev,curr)=>prev+curr,0),
                        },
                        {
                            macroproceso:"Soporte",
                            cantidad:tasksArray.filter((item)=>{return(item.Macroprocess==="Soporte")}).map((item2)=>item2.activitieDuration).reduce((prev,curr)=>prev+curr,0),
                        },
                        {
                            macroproceso:"Ingenieria",
                            cantidad:tasksArray.filter((item)=>{return(item.Macroprocess==="Ingenieria")}).map((item2)=>item2.activitieDuration).reduce((prev,curr)=>prev+curr,0),
                        },
                        {
                            macroproceso:"Otro",
                            cantidad:tasksArray.filter((item)=>{return(item.Macroprocess==="Otro")}).map((item2)=>item2.activitieDuration).reduce((prev,curr)=>prev+curr,0),
                        },
                        {
                            macroproceso:"Día Festivo",
                            cantidad:tasksArray.filter((item)=>{return(item.Macroprocess==="Día Festivo")}).map((item2)=>item2.activitieDuration).reduce((prev,curr)=>prev+curr,0),
                            
                        }
                    ]
                )
            }else{
                reject("no se pudo")
            }
        }).then((response)=>{setUserData({
            labels: response.map((data)=>data.macroproceso),
            datasets:[
                {
                label:`Del ${tasksArray[0].dateMade} al ${tasksArray[tasksArray.length-1].dateMade}`,
                data:response.map((data)=>data.cantidad),
                backgroundColor:["rgba(16,151,213,0.4)","rgba(129,183,31,0.4)"],
                borderColor:["#1097d5","#81b71f"],
                borderWidth:2
    
            },
        ],
        });
        setChartOptions({
            responsive: true,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Horas laboradas en macroproceso",
              },
            },
          });
    })
    },[tasksArray]) 
   /* console.log(tasksArray.filter((item)=>{return(item.Macroprocess==="Gerencia")})); */
   /* console.log(userData)  */

   return (
      <div>
        <Bar options={chartOptions} data={userData} />
      </div>
    );
  }
  

export default BarChartGraphic;