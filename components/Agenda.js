import React, { useEffect, useState } from 'react';
import styles from '@/styles/components/Agenda.module.css'
import AgendaItem from './agendaItem';
import AgendaHeader from './agendaHeader';
import AgendaFooter from './agendaFooter';
import AddItemInput from './itemAdder';


export default function Agenda() {



  // disable right click
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault()
    }

    document.addEventListener("contextmenu", handleContextMenu)
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  }, [])


  // init time options
  const timeOptions = [ 5, 10, 15, 20, 30, 45]


  // init agenda data holder
  const [agendaData, addItem] = React.useState([]);
  const [totalMin, sumMin] = React.useState([]);


  // calculate total minutes
  let agenda = agendaData,
  i;

  // add an item
  const handleAddItem = (e) => {
    const addForm = document.querySelector("[data-inputform]")
    const newItemTitle = addForm.getElementsByTagName("input")[0].value
    addForm.reset()
    e.preventDefault()
    if ( newItemTitle != "" ) {
      addItem([ ...agendaData, 
        {
          title: newItemTitle,
          time: 5
        }
      ]);
      addForm.getElementsByTagName("input")[0].placeholder = "Add agenda item"
      addForm.getElementsByTagName("input")[0].style.background = "rgba(var(--foreground-rgb), 0.025)"
    } else {
      addForm.getElementsByTagName("input")[0].placeholder = "Item title cannot by blank!"
      addForm.getElementsByTagName("input")[0].style.background = "rgba(255,0,50,0.1)"
      setTimeout(() => { addForm.getElementsByTagName("input")[0].style.background = "rgba(var(--foreground-rgb), 0.025)" }, 800);
    }

    const sumValues = agenda.reduce(function(prev, cur) {
      return prev + cur.time;
    }, 0);
    sumMin(sumValues, console.log("callback"));
    
  };

  const triggerClick = (e) => {
    e.setState(prevState => ({
      agendaData: prevState.agendaData.map(
        el => el.key === key? { ...el, time: 25 }: el
      )
    }))
  }


  // handle time click
  const handleTimeClick = (e) => {
    console.log(e.pageX)
    // const timeDialog = document.querySelector("[data-modal]")
    // timeDialog.show()
  }


  // clear agneda
  const handleClear = () => {
    const addForm = document.querySelector("[data-inputform")
    addForm.reset()
    addItem([]);
  }

  
  
  return <div className={styles.agendaList}>
    <AgendaHeader />
    <AddItemInput handleAddItem={handleAddItem} />
    <div className={styles.agendaItems}>
          {agendaData.map((item, i)=>
          <div key={i}>
             <AgendaItem title={item.title} time={item.time} handleTimeClick={handleTimeClick} key={i} />
          </div>
          )}
    </div>
    <AgendaFooter totalMin={totalMin} populated={agendaData.length > 0 ? true : false} handleClear={handleClear} />


    {/* <dialog data-modal className={styles.dialog}>
      {timeOptions.map((option) => (
        <div>{option}m</div>
      ))}
    </dialog> */}
  </div>;
}