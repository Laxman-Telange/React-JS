import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./Series";


export const Cards = () => {
  return (
    <>
      <header>
        <ul className="hello">
          {seriesData.map((curElem) => (
            <SeriesCard key={curElem.id} data={curElem} />
          ))}
        </ul>
      </header>
    </>
  );
};
