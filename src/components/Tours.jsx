import { useState } from 'react'
import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";

const Tours = () => {
  const [toursData, setToursData] = useState(tours)
  function removeItem(id){
    setToursData(toursData.filter(item => item.id !== id))
  }
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour key={tour.id} {...tour} onClick={() => removeItem(tour.id)} />;
        })}
      </div>
    </section>
  );
};
export default Tours;
