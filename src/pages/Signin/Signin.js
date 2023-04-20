import React from 'react'
import style from "./Signin.module.css"
import logo from "../../component/left/logo.png"

function Signin() {
  return (
    <>
    <div className={style.logo}>
        <img src={logo}></img>
        <h2 className={style.name}>Hos<span className={style.name_span}>pit</span>al</h2>
        </div>
    <div className={style.main}>
       
        <div className={style.container}>

        
       

      

      
    <div className={style.box}>
      
      <div className={style.content}>
       
        <h2>UserId</h2>
      <div class={style.inputBox}>
      <input type="text"></input>
      </div>  
      <div className={style.buttons}>
      <button>Submit</button>
      </div>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Signin
