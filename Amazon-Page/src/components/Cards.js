import { data } from "./Data";
import { Cards } from "./Cards-data";
export const Card = ({ addToCart }) => {
  return (
    <>
      <h1 className="head">CPU COMPONENTS</h1>
      <div className="card-grid">
        {data.map((item, index) => (
          <Cards
            key={index}
            image={item.image}
            title={item.title}
            price={item.price}
            subtitle={item.subtitle}
            rating={item.rating}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
};
