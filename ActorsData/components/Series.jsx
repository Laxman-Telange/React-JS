//destructuring
export const SeriesCard = ({ data }) => {
  const { id, name, image, rating } = data;
  return (
    <>
      <li>
        <div className="card">
          <img
            src={image}
            alt={name}
            style={{ width: "100%", height: "200px" }}
          />
          {/* <div className="contain"> */}
          <div className=" ">
            <h2>{name}</h2>
            <h3 className="">Price:{id}</h3>

            <h3>
              Rating:
              <span
                className={`rating ${rating >= 7.5 ? "super-hit" : "average"}`}
              >
                {rating}
              </span>
            </h3>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </li>
    </>
  );
};
