import React from 'react';
import styles from './modal.module.css';

const Modal = ({ onClose }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.text}>Fill in the missing fields</p>
        <button onClick={onClose} type='submit' className={styles.btn}>
          Close modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
