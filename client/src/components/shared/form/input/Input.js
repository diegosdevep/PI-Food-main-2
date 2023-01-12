import React from 'react';
import styles from './input.module.css';

const Input = ({
  placeholder,
  value,
  type,
  onChange,
  name,
  min = '0',
  max = '100',
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={styles.input}
        onChange={onChange}
        name={name}
        min={min}
        max={max}
      />
    </div>
  );
};

export default Input;
