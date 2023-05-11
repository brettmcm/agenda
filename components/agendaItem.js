import React, { useCallback, useState } from 'react';
import styles from '@/styles/components/Agenda.module.css'
import { DragHandle } from './icons';



export default function AgendaItem(props) {

  const [timeAdjust, timeAdjustActive] = React.useState([false]);

  const [setCurrentBarValue, changeValue] = React.useState([0]);

  const handleMouseDown = useCallback((e) => {
    timeAdjustActive(false)
    document.body.style.cursor = "none";
    const container = e.target.parentNode;

    const barTotal = container.clientWidth;

    document.addEventListener('mousemove', function(event) { 
      var rect = container.getBoundingClientRect(); 
      var x = event.clientX - rect.left; 
      
      changeValue(Math.round(barTotal * (x / barTotal)));
    }); 

    document.addEventListener(
      "mouseup",
      () => {
        timeAdjustActive(true)
        document.body.style.cursor = "default";
      },
      { once: true }
    );
  }, []);

  return (
      <div className={timeAdjust ? styles.agendaItem : styles.agendaItemAdjusting}>
        <div className={styles.time}
          onMouseDown={handleMouseDown}
          >{props.time}m</div>
        <div className={styles.itemName} contentEditable="true" suppressContentEditableWarning="true">{props.title}</div>
        <DragHandle />
        <div className={timeAdjust ? styles.timeBarHidden : styles.timeBar} style={{width: setCurrentBarValue}}></div>
      </div>
  );
}