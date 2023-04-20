import React from 'react'
import LeftSidebar from '../../component/left/LeftSidebar'
import style from './Doctor.module.css'

function Doctor() {
  return (
    <>
    <div className={style.main_box}>
        
     <LeftSidebar/>
     <table>
     <thead>
    <tr>
      <th>Patient Name</th>
      <th>Patient ID</th>
      <th>patient Report</th>
      <th>Patient Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>

     </table>
    </div>
    
    </>
  )
}

export default Doctor
