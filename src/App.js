import Card from "./components/Card";
import Header from "./components/Header";
import CartBasket from "./components/CartBasket";

function App() {
  return (
    <div className="wrapper clear">

      <CartBasket/>
      <Header/>
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
     <Card/>
     
     
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
