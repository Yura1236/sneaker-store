import React from "react";
import Header from "./components/Header";
import CartBasket from "./components/CartBasket";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";



function App() {
  const [items, setItems] =React.useState([]);
  const [cartItems, setCartItems] =React.useState([]);
  const [favorites, setFavorites]=React.useState([]);
  const [searchValue, setSearchValue] =React.useState(''); 
  const [cartOpened, setCartOpened ]=React.useState(false);
 

  React.useEffect(()=>{
  axios.get('https://65c76fbae7c384aada6e87e9.mockapi.io/items').then(res =>{
    setItems(res.data)
  });
  axios.get('https://65c76fbae7c384aada6e87e9.mockapi.io/cart').then(res =>{
    setCartItems(res.data)
  });
  
  axios.get('https://65dca28ae7edadead7ec9867.mockapi.io/favorite').then(res =>{
    setFavorites(res.data)
  });

  },[]);


  const onAddToCart = (obj) => {
    axios.post('https://65c76fbae7c384aada6e87e9.mockapi.io/cart',obj);

    setCartItems((prev) => [...prev, obj]);
    console.log(obj);
  };
 

  const onRemoveItem = (id) => {
    console.log(id);
  
    axios.delete(`https://65c76fbae7c384aada6e87e9.mockapi.io/cart/${id}`)
      .then(response => {
        if (response.status === 200) {
          setCartItems(prev => prev.filter(item => item.id !== id));
      
        } else {
          // В случае другого статуса ответа сервера также можно обработать ошибку здесь
          console.error("Ошибка при удалении элемента из корзины:", response.statusText);
        }
      })
      .catch(error => {
        // Обработка ошибок запроса
        if (error.response) {
          // Сервер вернул код состояния отличный от 2xx
          console.error("Ошибка при удалении элемента из корзины:", error.response.status, error.response.data);
        } else if (error.request) {
          // Запрос был сделан, но не получен ответ
          console.error("Ошибка при отправке запроса на удаление элемента из корзины:", error.request);
        } else {
          // Возникла ошибка при настройке запроса
          console.error("Ошибка настройки запроса на удаление элемента из корзины:", error.message);
        }
      });
  };
  
  const onAddToFavorite = async (obj) => {
    try {
        if (favorites.find(favobj => favobj.id === obj.id)) {
      axios.delete(`https://65dca28ae7edadead7ec9867.mockapi.io/favorite/${obj.id}`)
       
    } else {
const {data} = await axios.post('https://65dca28ae7edadead7ec9867.mockapi.io/favorite',obj)
     setFavorites(prev => [...prev, data]); 
      
        
    }
    } catch (error) {
      alert('No favorites')
    }
  
  };
  
 const onChangeSearchInput = (event)=>{
  setSearchValue(event.target.value);

 }
  return (
    <div className="wrapper clear">

      {cartOpened && <CartBasket items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={()=>setCartOpened(true)}/>
    
      <Routes>
  <Route path="/"  element={
    <Home
      items={items}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      onChangeSearchInput={onChangeSearchInput}
      onAddToFavorite={onAddToFavorite}
      onAddToCart={onAddToCart}
    />
  } exact />
</Routes>


      <Routes>
  <Route path="/favorites"  element={
    <Favorites items={favorites} onAddToFavorite={onAddToFavorite}/>
  } exact />
</Routes>
      
    </div>
  );
}
export default App;


