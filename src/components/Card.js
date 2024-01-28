function Card(){
return(
<div className="card">
<div className="faforite">
    <img src="/img/Like 1.svg" alt="Like 1"/>
</div>
<img width={133} height={112} src="/img/sneakers/image 1.jpg" alt="sneakers"/>
<h5>Мужские Кроссовки Nike Air Max 270</h5>
<div className="d-flex justify-between align-center">
 <div className="price d-flex flex-column">
   <span>цена:</span>
   <b> 3333 грн</b>
 </div>
 <button className="button">
   <img width={11} height={11} src="/img/Vector.svg" alt="Plus"/>
 </button>
</div>
</div>


)
}
export default Card;