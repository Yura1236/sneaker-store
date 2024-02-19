function CartBasket({ onCloseCart, items = [] }){
    return(
        <div className="overlay">
        <div className="basket">
          <h2 className="mb-30 d-flex justify-between">Корзина <img onClick={onCloseCart}  className="removeBtn cu-p" src="/img/button_delete.svg"alt="Close"/></h2>
          <div className="items flex">

         
          {items.map((obj) => (
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: `url(${obj.imageUrl})` }}
                className="cartItemImg"></div>

              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.price} руб.</b>
              </div>
              <img className="removeBtn" src="/img/button_delete.svg" alt="Remove" />
            </div>
       
       ))} 
       </div>
<div className="cartTotalBlock">

 <ul>
              <li >
                <span>Итого</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>налог 5%</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>

   <button className="greenButton">Офомить заказ<img src="/img/arrow.svg" alt="arrow"/></button>
</div>
      



           
          </div>
      </div>
    );
}
export default CartBasket;