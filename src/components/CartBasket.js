function CartBasket(){
    return(
        <div style={{display:'none'}}className="overlay">
        <div className="basket">
          <h2 className="mb-30 d-flex justify-between">Корзина <img className="removeBtn cu-p" src="/img/button_delete.svg"alt="button_delete"/></h2>
          <div className="items flex">

         
          <div className="cartItems d-flex align-center mb-20 ">
            <img className="mt-3 mr-20" width={70} height={70} src="/img/sneakers/image 1.jpg"alt="sneakers1"/>
            
                 <div className="mr-20">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                   <b> 3333 грн</b>
                </div>
                <div >
                  <img className="removeBtn" src="/img/button_delete.svg"alt="button_delete"/>
                </div>
          </div>
          <div className="cartItems d-flex align-center mb-20 ">
            <img className="mt-3 mr-20" width={70} height={70} src="/img/sneakers/image 1.jpg"alt="sneakers1"/>
            
                 <div className="mr-20">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                   <b> 3333 грн</b>
                </div>
                <div >
                  <img className="removeBtn" src="/img/button_delete.svg"alt="button_delete"/>
                </div>
          </div>
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