import Card from "../components/Card";

function Favorites({ items,onAddToFavorite }) {



  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <div>
          <h1>мои заклаки</h1>
          {/* <p className="coment">обирай найкраще!</p> */}
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {items.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorite}
            prise={item.prise}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
