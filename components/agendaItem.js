import React from 'react';
import { Inter } from 'next/font/google'
import styles from '@/styles/components/Agenda.module.css'
import { DragHandle } from './icons';



export default function AgendaItem(props) {

  return <div className={styles.agendaItem}
            onContextMenu={(e) => {
                  e.preventDefault();
                  // console.log("Right Click", e.pageX, e.pageY);
                }}
        >
        <div className={styles.time} onMouseDown={props.handleTimeClick}>{props.time}m</div>
        <div className={styles.itemName} contentEditable="true" suppressContentEditableWarning="true">{props.title}</div>
        <DragHandle />
        <dialog data-modal className={styles.dialog}>
          <div>5m</div>
          <div>10m</div>
          <div>15m</div>
          <div>20m</div>
          <div>30m</div>
        </dialog>
      </div>;
}