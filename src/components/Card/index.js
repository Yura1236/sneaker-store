import React from 'react';
import styles from './Card.module.scss';

function Card({ id, title, imageUrl, prise, onFavorite, onPlus, favorited }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, prise, imageUrl });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, prise, imageUrl });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img src={isFavorite ? "/img/Like 2.svg" : "/img/Like 1.svg"} alt="Like 1" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="price d-flex flex-column">
          <span>цена:</span>
          <b>{prise} грн</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          width={32}
          height={32}
          src={isAdded ? "/img/btnPlusG.svg" : "/img/btnPlus.svg"}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
