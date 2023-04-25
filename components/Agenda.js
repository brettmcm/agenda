import { Inter } from 'next/font/google'
import styles from '@/styles/components/Agenda.module.css'

const inter = Inter({ subsets: ['latin'] })

function DragHandle() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 6C12.5 6.27614 12.2761 6.5 12 6.5C11.7239 6.5 11.5 6.27614 11.5 6C11.5 5.72386 11.7239 5.5 12 5.5C12.2761 5.5 12.5 5.72386 12.5 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M18.5 6C18.5 6.27614 18.2761 6.5 18 6.5C17.7239 6.5 17.5 6.27614 17.5 6C17.5 5.72386 17.7239 5.5 18 5.5C18.2761 5.5 18.5 5.72386 18.5 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M18.5 12C18.5 12.2761 18.2761 12.5 18 12.5C17.7239 12.5 17.5 12.2761 17.5 12C17.5 11.7239 17.7239 11.5 18 11.5C18.2761 11.5 18.5 11.7239 18.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M6.5 6C6.5 6.27614 6.27614 6.5 6 6.5C5.72386 6.5 5.5 6.27614 5.5 6C5.5 5.72386 5.72386 5.5 6 5.5C6.27614 5.5 6.5 5.72386 6.5 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M6.5 12C6.5 12.2761 6.27614 12.5 6 12.5C5.72386 12.5 5.5 12.2761 5.5 12C5.5 11.7239 5.72386 11.5 6 11.5C6.27614 11.5 6.5 11.7239 6.5 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M12.5 18C12.5 18.2761 12.2761 18.5 12 18.5C11.7239 18.5 11.5 18.2761 11.5 18C11.5 17.7239 11.7239 17.5 12 17.5C12.2761 17.5 12.5 17.7239 12.5 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M18.5 18C18.5 18.2761 18.2761 18.5 18 18.5C17.7239 18.5 17.5 18.2761 17.5 18C17.5 17.7239 17.7239 17.5 18 17.5C18.2761 17.5 18.5 17.7239 18.5 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M6.5 18C6.5 18.2761 6.27614 18.5 6 18.5C5.72386 18.5 5.5 18.2761 5.5 18C5.5 17.7239 5.72386 17.5 6 17.5C6.27614 17.5 6.5 17.7239 6.5 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
  </svg>;
}

export default function Agenda() {
  return <div className={styles.agendaList}>
    <h1 className={styles.title}>
      <span className={styles.agendaName} contentEditable="true">Agenda</span>
      <span className={styles.date}>Tuesday, Apr 25</span>
    </h1>
    <a href="" className={styles.addBtn}>
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.75V18.25"></path>
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.25 12L5.75 12"></path>
      </svg>

      Add Item
    </a>
    <div className={styles.agendaItems}>
      <div className={styles.agendaItem}>
        <div className={styles.time}>5m</div>
        <div className={styles.itemName} contentEditable="true">Greetings / fire check</div>
        <DragHandle />
      </div>
      <div className={styles.agendaItem}>
        <div className={styles.time}>5m</div>
        <div className={styles.itemName} contentEditable="true">Team kudos</div>
        <DragHandle />
      </div>
      <div className={styles.agendaItem}>
        <div className={styles.time}>10m</div>
        <div className={styles.itemName} contentEditable="true">Manager comms</div>
        <DragHandle />
      </div>
      <div className={styles.agendaItem}>
        <div className={styles.time}>20m</div>
        <div className={styles.itemName} contentEditable="true">Round table</div>
        <DragHandle />
      </div>
      <div className={styles.agendaItem}>
        <div className={styles.time}>10m</div>
        <div className={styles.itemName} contentEditable="true">Open discussion</div>
        <DragHandle />
      </div>
    </div>
    <div className={styles.agendaTotal}>
      50 minutes total
    </div>
  </div>;
}