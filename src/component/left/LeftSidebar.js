import React from 'react'
import style from "./LeftSidebar.module.css"
import logo from "./logo.png"

import { IoMdSpeedometer } from 'react-icons/io';
import { MdDeliveryDining } from 'react-icons/md';
import {BsQuestionCircle } from 'react-icons/bs';


const menu=[{

  icon: IoMdSpeedometer,
  text: "Dashboard", 
},
{

  icon: MdDeliveryDining,
  text: "My Order", 
},{

  icon: MdDeliveryDining,
  text: "My Order", 
},{

  icon: MdDeliveryDining,
  text: "My Order", 
},{

  icon: MdDeliveryDining,
  text: "My Order", 
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
