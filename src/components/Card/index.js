import React from 'react';
import styles from './Card.module.scss';

function Card({ title, imageUrl, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, price, imageUrl});
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/Like 1.svg" alt="Like 1" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="price d-flex flex-column">
          <span>цена:</span>
          <b>{price} грн</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          width={32}
          height={32}
          src={isAdded ? "/img/btnPlusG.svg" : "./img/btnPlus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;