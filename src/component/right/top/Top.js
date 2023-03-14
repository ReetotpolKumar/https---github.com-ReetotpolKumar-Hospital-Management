import React, { useState } from 'react'
import style from "./Top.module.css"
import {BiSearchAlt} from "react-icons/bi"
import {TbMessageCircle} from "react-icons/tb"
import {IoMdNotificationsOutline} from "react-icons/io"
import {MdPeopleAlt} from "react-icons/md"
import video from "./3.mp4"
import image from "./1.png"
import e2 from "./e2.png"
function Top() {
    const[date,setDate]=useState()
    var today = new Date();
    let d = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
  return (
   <>
   <div className={style.topsection}>
    
    <div className={style.header}>
<div className={style.title}>
    <h3>Welcome To Hospital</h3>
    <p>Hello Tag Line Here</p>


</div>
<div className={style.search_box}>
    <input type="text" placeholder='Search Dashboard'></input>
    <BiSearchAlt className={style.icon}/>

</div>
<div className={style.admin}>
    <MdPeopleAlt className={style.icon}/> 
    <TbMessageCircle className={style.icon}/> 
    <IoMdNotificationsOutline className={style.icon}/>
    


</div>


    </div>
   

    <div className={style.card}>
        <div className={style.right_card}>
            <h2>{d}</h2>
            <div className={style.video}>
                <video src={video} autoPlay muted loop ></video>
                

            </div>


        </div>
        <div className={style.date}>
            <div className={style.table_heading}>
        <h3>Today's announcement</h3>
         <table>

        <tr style={{color:" rgb(109, 109, 224)"}}>
        <td style={{paddingRight:".5rem"}}>Patient Name </td>
        <td>Patient Status</td>

        </tr>
        <tr class={style.td_color}>
            <td>Krishan</td>
            <td>Stable</td>
        </tr>
        <tr class={style.td_color}>
            <td>Pavan</td>
            <td>Serious</td>
        </tr>
        <tr class={style.td_color}>
            <td>Rohit</td>
            <td>Vital Signs</td>
        </tr>
         </table>
         
         </div>
       
         <div className={style.img}>
        <img src={image}></img>
        
         </div>
        
        </div>
      



    </div>
    <div className={style.emegency_main}>
    <div className={style.emegency_card}>

    <img src={e2}></img>
    </div>
    </div>
  
    </div>
   </>
  )
}

export default Top
