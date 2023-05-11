import React from 'react';
import styles from '@/styles/components/Agenda.module.css'


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

export default function AgendaHeader() {
  return <h1 className={styles.title}>
      <span className={styles.agendaName} contentEditable="true" suppressContentEditableWarning="true">Agenda</span>
      <span className={styles.date}>{dateDisplay()}</span>
    </h1>
}