import React, { useCallback, useState } from 'react';
import styles from '@/styles/components/Agenda.module.css'
import { DragHandle } from './icons';



export default function AgendaItem(props) {


  const [timeAdjust, timeAdjustActive] = React.useState([false]);

  const [setCurrentBarValue, changeValue] = React.useState([0]);
  const [definedTime, redefineTime] = React.useState(props.time);

  const handleMouseDown = useCallback((e) => {
    timeAdjustActive(false)
    document.body.style.cursor = "none";
    const container = e.target.parentNode;

    const barTotal = container.clientWidth;
    changeValue(Math.round((barTotal/5) * (props.time/5)));

    var sliderMove = function(event) {

      const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

      var rect = container.getBoundingClientRect(); 
      var x = event.clientX - rect.left;
      const initialX = 25;
      var initialValue = Math.round((barTotal/5) * (definedTime/5));
      var differential = initialValue - initialX;
      var targetValue = clamp(x + differential, 0, barTotal);
      
      changeValue(targetValue);
      redefineTime(targetValue);
    };

    document.addEventListener('mousemove', sliderMove); 

    document.addEventListener(
      "mouseup",
      () => {
        timeAdjustActive(true)
        document.body.style.cursor = "default";
        changeValue(0);
        document.removeEventListener('mousemove', sliderMove); 
      },
      { once: true }
    );
  }, []);

  return (
      <div className={timeAdjust ? styles.agendaItem : styles.agendaItemAdjusting}>
        <div className={styles.time}
          onMouseDown={handleMouseDown}
          >{definedTime}m</div>
        <div className={styles.itemName} contentEditable="true" suppressContentEditableWarning="true">{props.title}</div>
        <DragHandle />
        <div className={timeAdjust ? styles.timeBarHidden : styles.timeBar} style={{width: setCurrentBarValue}}></div>
      </div>
  );
}