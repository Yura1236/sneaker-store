import React from 'react';
import styles from './Card.module.scss'


function Card(props){
  

  const [isAdded,setIsAdded]= React.useState(false);
  const onClickPlus =()=>{
    setIsAdded(!isAdded);
  }

return(
<div className={styles.card}>
<div className={styles.favorite} onClick={props.onFavorite}>
    <img src="/img/Like 1.svg" alt="Like 1"  />
</div>
<img width={133} height={112} src={props.imageUrl} alt="sneakers"/>
<h5>{props.title}</h5>
<div className="d-flex justify-between align-center">
 <div className="price d-flex flex-column">
   <span>цена:</span>
   <b> {props.prise} грн</b>
 </div>

   <img className={styles.plus}  onClick={onClickPlus}  width={32} height={32} src={isAdded ? "/img/btnPlusG.svg":"./img/btnPlus.svg"} alt="Plus"/>

</div>
</div>


)
}
export default Card;