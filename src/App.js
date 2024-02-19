import React from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import CartBasket from "./components/CartBasket";
import axios from "axios";


function App() {
  const [items, setItems] =React.useState([]);
  const [cartItems, setCartItems] =React.useState([]);
  const [searchValue, setSearchValue] =React.useState(''); 
  const [cartOpened, setCartOpened ]=React.useState(false);
  React.useEffect(()=>{

  axios.get('https://65c76fbae7c384aada6e87e9.mockapi.io/items').then(res =>{
    setItems(res.data)
  })
  },[]);


  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
    console.log(obj);
  };
 
 const onChangeSearchInput = (event)=>{
  setSearchValue(event.target.value);

 }
  return (
    <div className="wrapper clear">

     {cartOpened && <CartBasket items={cartItems}  onCloseCart={()=>setCartOpened(false)}/>}
      <Header onClickCart={()=>setCartOpened(true)}/>
      <div className="content  p-40">
        <div className="d-flex align-center justify-between">
          <div>
            <h1>{searchValue?`поиск по запросу:"${searchValue}"`: 'все красовки'}</h1>
              <p c1lassName="coment">обирай найкраще!</p>
           </div>

            <div className="search-block d-flex">
                 <img src="img/search.svg" alt="search" />
                  {searchValue && <img onClick={()=>setSearchValue('')}  className="clearr cu-p" src="/img/button_delete.svg"alt="Close"/>}
                 <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..." />
               
            </div>

      </div>
 

               <div className="d-flex flex-wrap">
               {items.filter((item) => item.title.toLowerCase()).map((item,index)=>(
              
              <Card 
               key={index}
               title={item.title}
               prise={item.prise}
               imageUrl={item.imageUrl}
               onFavorite={()=>console.log('Добавили в закладки')}
               onPlus={(obj)=>onAddToCart(obj)}
           />
              ))}
     
               </div>
      </div>
    </div>
  );
}

export default App;
