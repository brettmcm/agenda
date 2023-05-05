import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google'
import styles from '@/styles/components/Agenda.module.css'
import AgendaItem from './agendaItem';


function dateDisplay () {
  const nowDate = new Date()
  const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
  })
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let dayName = weekday[nowDate.getDay()];
  let displayDate = dayName + ", " + longEnUSFormatter.format(nowDate)
  return displayDate;
}

function AgendaHeader() {
  return <h1 className={styles.title}>
      <span className={styles.agendaName} contentEditable="true" suppressContentEditableWarning="true">Agenda</span>
      <span className={styles.date}>{dateDisplay()}</span>
    </h1>
}

function AgendaFooter (props) {
  if (props.populated) {
    return<div className={styles.agendaTotal}>
          <div>{props.totalMin} minutes total</div>
          <div onClick={props.handleClear}><u>Clear agenda</u></div>
        </div>
  } else {
    return<div className={styles.agendaTotal}>
      <div>{props.totalMin} minutes total</div>
    </div>
  }
  
}

function AddItemBtn(props) {
  return <div className={styles.addBtn} onClick={props.handleAddItem}>
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.75V18.25"></path>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.25 12L5.75 12"></path>
      </svg>

      Add Item
    </div>
}


export default function Agenda() {

  useEffect(() => {
    // define a custom handler function
    // for the contextmenu event
    const handleContextMenu = (e) => {
      e.preventDefault()
    }

    // attach the event listener to 
    // the document object
    document.addEventListener("contextmenu", handleContextMenu)

    // clean up the event listener when 
    // the component unmounts
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [])

  const [agendaData, addItem] = React.useState([]);

  let totalMin = 0,
  agenda = agendaData,
  i;
  for (i = 0; i < agenda.length; i++) {  //loop through the array
      totalMin += agenda[i].time;  //Do the math!
  }

  const handleAddItem = () => {
      addItem([ ...agendaData, 
        {
          title: "New Item",
          time: 2
        }
      ]);
  };

  const handleClear = () => {
    addItem([]);
  }

  
  
  return <div className={styles.agendaList}>
    <AgendaHeader />
    <AddItemBtn handleAddItem={handleAddItem} />
    <div className={styles.agendaItems}>
          {agendaData.map((item, i)=>
             <AgendaItem title={item.title} time={item.time} key={i} />
          )}
    </div>
    <AgendaFooter totalMin={totalMin} populated={agendaData.length > 0 ? true : false} handleClear={handleClear} />
  </div>;
}