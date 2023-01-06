import React from 'react';
import { Link } from 'react-router-dom';
import styles from './card.module.css';

const Card = ({ id, name, imagen, diets }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={imagen} alt='receta' />
      <h4 className={styles.title}>{name}</h4>
      <Link to={`/details/${id}`} className={styles.btnDetail}>
        <button className={styles.btn}>Detalles</button>
      </Link>
    </div>
  );
};

export default Card;
