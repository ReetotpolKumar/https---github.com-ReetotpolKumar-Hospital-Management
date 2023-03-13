import React from 'react'
import LeftSidebar from '../component/left/LeftSidebar'
import Top from '../component/right/top/Top'
import style from "./Home.module.css"

function Home() {
  return (
    <>
    <div className={style.main_box}>
        
      <LeftSidebar/>
      

    <Top/>
    </div>
    </>
      
   
  )
}

export default Home
