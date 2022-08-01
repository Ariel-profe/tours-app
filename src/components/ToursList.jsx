import React from 'react';
import { TourCard } from './';


export const ToursList = ({tours, removeTour}) => {
  return (
    <section>
    <div className="title">
      <h2>our tours</h2>
      <div className="underline"></div>
    </div>
    <div>
      {tours.map((tour) => {
        return <TourCard key={tour.id} {...tour} removeTour={removeTour} />;
      })}
    </div>
  </section>
  )
}
