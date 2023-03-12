import React from 'react'
import LeftSidebar from '../component/left/LeftSidebar'
import style from "./Home.module.css"

function Home() {
  return (
    
    <div className={style.main_box}>
      <LeftSidebar/>
    </div>
  )
}

export default Home
