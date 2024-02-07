import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import CartBasket from "./components/CartBasket";
const arr =[
{title:'1111111',prise:1299,imageUrl:'/img/sneakers/image 1.jpg'},
{title:'222222',prise:12,imageUrl:'/img/sneakers/image 2.jpg'},
{title:'11333333',prise:99,imageUrl:'/img/sneakers/image 3.jpg'},
{title:'1444444',prise:1,imageUrl:'/img/sneakers/image 4.jpg'},
];

function App() {
  const [cartOpened, setCartOpened ]=React.useState(false);
  return (
    <div className="wrapper clear">

     {cartOpened && <CartBasket  onCloseCart={()=>setCartOpened(false)}/>}
      <Header onClickCart={()=>setCartOpened(true)}/>
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
               {arr.map((obj)=>(
               <Card 
                   title={obj.title}
                   prise={obj.prise}
                   imageUrl={obj.imageUrl}
                   onFavorite={()=>console.log('Добавили в закладки')}
                   onPlus={()=>console.log('Нажали плюс')}
              />

              ))}
     
    
    
               </div>
      </div>
    </div>
  );
}

export default App;
