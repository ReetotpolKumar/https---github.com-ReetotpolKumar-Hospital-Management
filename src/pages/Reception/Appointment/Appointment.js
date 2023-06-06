import React from 'react'
import LeftSidebar from '../../../component/left/LeftSidebar'
import style from './Appointment.module.css'
function Appointment() {
  return (
    <>
    
    <div className={style.main_box}>
        
        <LeftSidebar/>
        <div className={style.radiobutton_position}>
    
            <input type="radio" id="html" name="fav_language" value="HTML"></input>
            <label for="html">HTML</label><br></br>
            <input type="radio" id="css" name="fav_language" value="CSS"></input>
            <label for="css">CSS</label><br></br>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
            <label for="javascript">JavaScript</label><br></br>
            <input type="radio" id="html"  value="HTML"></input>
            


        </div>
    </div>
    </>
  )
}

export default Appointment
