import React, { useState } from 'react';
import style from "./Accorodion.module.css"
import ReportTable from '../ReportTable/ReportTable';
function Accordion() {

    const items = [
        {
           title: "Section 2",
           content: <ReportTable/>
        },
        {
            title: "Section 2",
            content: <ReportTable/>
         },
         {
            title: "Section 2",
            content: <ReportTable/>
         },
         {
            title: "Section 2",
            content: <ReportTable/>
         },
         {
            title: "Section 2",
            content: <ReportTable/>
         },
         {
             title: "Section 2",
             content: <ReportTable/>
          },
          {
             title: "Section 2",
             content: <ReportTable/>
          },
          {
             title: "Section 2",
             content: <ReportTable/>
          },
          {
            title: "Section 2",
            content: <ReportTable/>
         },
         {
             title: "Section 2",
             content: <ReportTable/>
          },
          {
             title: "Section 2",
             content: <ReportTable/>
          },
          {
             title: "Section 2",
             content: <ReportTable/>
          },
          {
            title: "Section 2",
            content: <ReportTable/>
         },
         {
             title: "Section 2",
             content: <ReportTable/>
          },
          {
             title: "Section 2",
             content: <ReportTable/>
          },
          {
             title: "Section 2",
             content: <ReportTable/>
          },
        {
           title: "Section 2",
           content: "This is the content of section 2"
        },
        {
           title: "Section 3",
           content: "This is the content of section 3"
        }
     ]
const [activeIndex, setActiveIndex] = useState(-1);

   const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? -1 : index);
      
      console.log(activeIndex)
   };
   return (
      <div>
         {items.map((item, index) => (
            <div key={item.title}>
               <button onClick={() =>handleClick(index)} className={style.heading}>{item.title}</button>
               {index === activeIndex && <p>{item.content}</p>}
            </div>
         ))}
      </div>
   );
}
export default Accordion;