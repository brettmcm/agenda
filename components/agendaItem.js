import React, { useCallback, useState } from 'react';
import styles from '@/styles/components/Agenda.module.css'
import { DragHandle } from './icons';



export default function AgendaItem(props) {


  const [timeAdjust, timeAdjustActive] = React.useState([false]);

  const [setCurrentBarValue, changeValue] = React.useState([0]);
  const [definedTime, redefineTime] = React.useState(props.time);

  const round = function(x) {
      return Math.ceil(x / 5) * 5;
  }
  const roundSlider = function(x, fullWidth) {
      var increment = (fullWidth/5) + 1;
      return Math.ceil(x / increment) * increment;
  }

  const handleMouseDown = useCallback((e) => {
    timeAdjustActive(false)
    document.body.style.cursor = "none";
    const container = e.target.parentNode;

    changeValue(setCurrentBarValue);

    var sliderMove = function(event) {

      const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

      var rect = container.getBoundingClientRect(); 
      var meterWidth = rect.width;
      var mouseX = event.clientX - rect.left;
      var mouseModifier = clamp(mouseX, 0, meterWidth);
      var mouseModPercent = mouseModifier/meterWidth;
      var meterTarget = Math.trunc(1 * (mouseModPercent * 6)) * (meterWidth/6);

      changeValue(meterTarget);

      var displayValue = round((meterTarget/meterWidth) * 30);
      redefineTime(displayValue);

      // let tick = new Audio('../tick.wav');
      // if (displayValue === meterTarget) {
      //   tick.play();
      // }

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
        <div className={styles.meter}>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
          <div className={styles.tick}></div>
        </div>
      </div>
  );
}