import React from 'react';
import styles from './paginated.module.css';

const Paginated = ({ cardPerPages, allRecipes, pages, page, setPage }) => {
  const numberOfPages = [];
  let i = 1;

  while (i <= Math.ceil(allRecipes / cardPerPages)) {
    numberOfPages.push(i);
    i++;
  }

  const next = function () {
    if (page < numberOfPages.length) {
      setPage(page + 1);
    }
  };
  const prev = function () {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className={styles.container}>
      <ul className={styles.ulist}>
        <button onClick={prev} className={styles.btn}>
          Prev
        </button>
        {numberOfPages &&
          numberOfPages.map((n) => (
            <button
              className={page === n ? styles.activeLink : styles.btn}
              key={n}
              onClick={() => pages(n)}
            >
              {n}
            </button>
          ))}
        <button onClick={next} className={styles.btn}>
          Next
        </button>
      </ul>
    </div>
  );
};

export default Paginated;
