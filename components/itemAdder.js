import React from 'react';
import styles from '@/styles/components/Agenda.module.css'

// function AddItemBtn(props) {
//   return <div className={styles.addBtn} onClick={props.handleAddItem}>
//       <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
//         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5.75V18.25"></path>
//         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.25 12L5.75 12"></path>
//       </svg>

//       Add Item
//     </div>
// }

export default function AddItemInput(props) {
  return <form data-inputform className={styles.inputForm} onSubmit={props.handleAddItem}>
    <input type="text" placeholder="Add agenda item" className={styles.formInput} />
    {/* <input type="number" /> */}
    {/* <button type="submit">Add</button> */}
  </form>
}