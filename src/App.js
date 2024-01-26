

function App() {
  return (
    <div className="wrapper clear">

      <div className="overlay">
        <div className="basket">
          <h2 className="mb-30">Корзина</h2>
          <div className="items">

         
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

       <ul className="cartTotalBlock">
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
          </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
        <img width={50}  src="/img/image 4.png" alt="Логотип кроссовок Snickers"/>

              <div >
               <h3 className="text-uppercase">React sneakers</h3>
               <p className="opacity-7">Магазин лутших красовок</p>
              </div>
        </div>
        <ul className="d-flex align-center text-center">
          <li className="mr-30"><img className="mr-5"  width={18} height={18} src="/img/Group.svg"/><span >1205 грн</span></li>

          <li><img width={18} height={18}  src="/img/Union.svg"/></li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between">
          <div>
            <h1>Все красовки</h1>
              <p className="coment ">обирай найкраще!</p>
           </div>

            <div className="search-block d-flex">
                 <img src="img/search.svg" alt="search" />
                 <input placeholder="Поиск ..." />
            </div>

      </div>
 

      <div className="d-flex">
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
      <div className="card">
        <img width={133} height={112} src="/img/sneakers/image 2.jpg" alt="sneakers"/>
        <h5>Мужские Кроссовки Nike Air Max 270</h5>
        <div className="d-flex justify-between align-center">
          <div className=" price d-flex flex-column">
            <span>цена:</span>
            <b> 3333 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/Vector.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/img/sneakers/image 3.jpg" alt="sneakers"/>
        <h5>Мужские Кроссовки Nike Air Max 270</h5>
        <div className="d-flex justify-between align-center">
          <div className=" price d-flex flex-column">
            <span>цена:</span>
            <b> 3333 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/Vector.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      <div className="card">
        <img width={133} height={112} src="/img/sneakers/image 4.jpg" alt="sneakers"/>
        <h5>Мужские Кроссовки Nike Air Max 270</h5>
        <div className="d-flex justify-between align-center">
          <div className=" price d-flex flex-column">
            <span>цена:</span>
            <b> 3333 грн</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/Vector.svg" alt="Plus"/>
          </button>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
