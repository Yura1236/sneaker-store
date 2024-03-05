function CartBasket({ onCloseCart,onRemove,items = [] }){
    return(
        <div className="overlay">
        <div className="basket">
          <h2 className="mb-30 d-flex justify-between">Корзина <img onClick={onCloseCart}  className="removeBtn cu-p" src="/img/button_delete.svg"alt="Close"/></h2>
        


{items.length > 0 ? 


 <div>
          <div className="items ">
          {items.map((obj) => (
            <div key={obj.id} className="cartItem d-flex align-center mb-20">
              <div
                style={{backgroundImage:`url(${obj.imageUrl})`}}
                className="cartItemImg"></div>

              <div className="mr-20 flex">
                <p className="mb-5">{obj.title}</p>
                <b>{obj.prise} руб.</b>
              </div>
              <img onClick={()=>onRemove(obj.id)} className="removeBtn cu-p" src="/img/button_delete.svg" alt="Remove" />
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

       
       :  <div class="cartEmpty d-flex align-center justify-center flex-column flex">
            <img class="mb-20" width="120px" height="120px" src="/img/empty-cart.png" alt="Empty" />
            <h2>Корзина пустая</h2>
            <p class="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onCloseCart} class="greenButton">
              <img   src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
       
      }

        
        
        
        
         
       

      



           
          </div>
      </div>
    );
}
export default CartBasket;