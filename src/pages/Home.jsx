import Card from "../components/Card";
function Home({
    items,
searchValue,
setSearchValue,
onChangeSearchInput,
onAddToFavorite,
onAddToCart,
}){
return(
<div className="content  p-40">
        <div className="d-flex align-center justify-between">
          <div>
            <h1>{searchValue?`поиск по запросу:"${searchValue}"`: 'все красовки'}</h1>
              <p className="coment">обирай найкраще!</p>
           </div>

            <div className="search-block d-flex">
                 <img src="img/search.svg" alt="search" />
                  {searchValue && <img onClick={()=>setSearchValue('')}  className="clearr cu-p" src="/img/button_delete.svg"alt="Close"/>}
                 <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск ..." />
               
            </div>

      </div>
 

               <div className="d-flex flex-wrap">
               {items.filter((item) => item.title.toLowerCase().includes(searchValue)).map((item,index)=>(
              
              <Card 
               key={index}
               title={item.title}
               prise={item.prise}
               imageUrl={item.imageUrl}
               onFavorite={(obj)=>onAddToFavorite(obj)}
               onPlus={(obj)=>onAddToCart(obj)}
           />
              ))}
     
               </div>
      </div>
);

}
export default Home;