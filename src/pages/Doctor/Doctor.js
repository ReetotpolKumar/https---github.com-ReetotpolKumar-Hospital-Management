import React, { useState } from 'react'
import LeftSidebar from '../../component/left/LeftSidebar'
import CenteredModal from '../../component/Modal/CenteredModal';
import style from './Doctor.module.css'

import {AiOutlineFolderView} from 'react-icons/ai';
import {TbReportMedical} from 'react-icons/tb'
import {TfiWrite} from 'react-icons/tfi'
import {GrFormView} from 'react-icons/gr'


function Doctor() {
  const [modalShow, setModalShow] =useState(false);

  return (
    <>
    <div className={style.main_box}>
        
     <LeftSidebar/>
     <div className={style.table_position}>
     <table>
     <thead className={style.thead}>
    <tr>
      <th className={style.th}>Patient Name</th>
      <th  className={style.th}>Patient ID</th>
      <th  className={style.th}>Patient History</th>
      <th  className={style.th}>patient Report</th>
      <th  className={style.th}>Patient Description</th>
      <th  className={style.th}>Patient Prescription</th>
      <th  className={style.th}>Preview</th>

    </tr>
  </thead>
  <tbody className={style.tbody}>
    <tr>
      <td className={style.td}>Pavan Patil</td>
      <td className={style.td}>Ad00453</td>
      <td className={style.td}><AiOutlineFolderView style={{fontSize:'1.5rem'}} /></td>
      <td className={style.td}><TbReportMedical style={{fontSize:'1.4rem'}}/></td>
      <td className={style.td}>viral fever</td>
      <td className={style.td}><TfiWrite style={{fontSize:'1.5rem'}}/></td>
      <td className={style.td}><GrFormView style={{fontSize:'1.7rem'}} onClick={() => setModalShow(true)}/></td>

    </tr>

    <tr>
      <td className={style.td}>Pavan Patil</td>
      <td className={style.td}>Ad00453</td>
      <td className={style.td}><AiOutlineFolderView style={{fontSize:'1.5rem'}} /></td>
      <td className={style.td}><TbReportMedical style={{fontSize:'1.4rem'}}/></td>
      <td className={style.td}>viral fever</td>
      <td className={style.td}><TfiWrite style={{fontSize:'1.5rem'}}/></td>
      <td className={style.td}><GrFormView style={{fontSize:'1.7rem' }}/></td>

    </tr>
    
  </tbody>

     </table>
     </div>

     
     <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)} className={style.modal}
      />
    </div>
    
    </>
  )
}

export default Doctor
