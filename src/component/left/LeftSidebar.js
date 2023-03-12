import React from 'react'
import style from "./LeftSidebar.module.css"
import logo from "./logo.png"

function LeftSidebar() {
  return (
    <div className={style.sidebar_grid}>
      <div className={style.logo_flex}>
        <img src={logo}></img>
        <h2>Hospital</h2>


      </div>
      
    </div>
  ) 
}

export default LeftSidebar
