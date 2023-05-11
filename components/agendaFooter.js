import React from 'react';
import styles from '@/styles/components/Agenda.module.css'
import { Refresh, Play } from './icons';

export default function AgendaFooter (props) {
  if (props.populated) {
    return<div className={styles.agendaFooter}>
          <div className={styles.agendaTotal}>{props.totalMin} minutes total</div>
          <Refresh handleClear={props.handleClear} />
          {/* <Play handleClear={props.handleClear} /> */}
        </div>
  } else {
    return<div className={styles.agendaFooter}>
      <div className={styles.agendaTotal}>{props.totalMin} minutes total</div>
    </div>
  }
  
}