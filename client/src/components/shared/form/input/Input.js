import React from 'react';
import styles from './input.module.css';

const Input = ({ placeholder, value, type, onChange, name }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={styles.input}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
