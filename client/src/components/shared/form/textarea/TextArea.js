import React from 'react';
import styles from './textarea.module.css';

const TextArea = ({ value, onChange, name }) => {
  return (
    <textarea
      name={name}
      className={styles.textarea}
      value={value}
      onChange={onChange}
    ></textarea>
  );
};

export default TextArea;
