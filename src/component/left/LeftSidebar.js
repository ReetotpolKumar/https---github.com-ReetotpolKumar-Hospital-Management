import React from 'react'
import style from "./LeftSidebar.module.css"
import logo from "./logo.png"

import {BsCalendar2DateFill } from 'react-icons/bs';
import {GiPlagueDoctorProfile} from 'react-icons/gi';
import {FaUserNurse } from 'react-icons/fa';
import {MdLocalPharmacy } from 'react-icons/md';
import {ImLab } from 'react-icons/im';
import {BsQuestionCircle } from 'react-icons/bs';


const menu=[{

  icon: BsCalendar2DateFill,
  text: "Appointment", 
},
{

  icon: GiPlagueDoctorProfile,
  text: "Doctor", 
},{

  icon: FaUserNurse,
  text: "Nurse", 
},{

  icon: MdLocalPharmacy,
  text: "pharmacy", 
},{

  icon: ImLab,
  text: "laboratory", 
},



]

function LeftSidebar() {
  return (
    <div className={style.sidebar_grid}>
      <div className={style.logo}>
        <img src={logo}></img>
        <h2 className={style.name}>Hos<span className={style.name_span}>pit</span>al</h2>
         </div>


      <div className={style.menu}>
        <h3 className={style.title}>
          QUICK MENU


        </h3>
        
        <ul className={style.menu_list}>
          {menu.map((element)=>{
            return (
              <div className={style.list_hover}>
          <li className={style.list_item}><element.icon className={style.icon}/>
          {element.text}
          </li>
          </div>
)})}
        </ul>

        <div className={style.sidebar_card}>
                <BsQuestionCircle className={style.icon}/>
                <div className={style.card_content}>
                  <div className={style.circle1}></div>
                  <div className={style.circle2}></div>
                  <h3>Help Center</h3>
                  <p>Trouble to access this page?Contact us</p>
                  <button className={style.btn}>Go to help</button>

                </div>
        </div>
        
        </div>      
    </div>
  ) 
}

export default LeftSidebar
