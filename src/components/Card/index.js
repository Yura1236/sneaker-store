
import styles from './Card.module.scss'

console.log(styles);
function Card(props){
  console.log(props);

;
return(
<div className={styles.card}>
<div className="faforite">
    <img src="/img/Like 1.svg" alt="Like 1"/>
</div>
<img width={133} height={112} src={props.imageUrl} alt="sneakers"/>
<h5>{props.title}</h5>
<div className="d-flex justify-between align-center">
 <div className="price d-flex flex-column">
   <span>цена:</span>
   <b> {props.prise} грн</b>
 </div>
 <button className="button" onClick={props.click}>
   <img width={11} height={11} src="/img/Vector.svg" alt="Plus"/>
 </button>
</div>
</div>


)
}
export default Card;