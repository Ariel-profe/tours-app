import { useEffect, useState } from 'react';
import './App.css'
import { Loading, ToursList } from './components';

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const url = 'https://course-api.com/react-tours-project';
 
  const fetchTours = async() => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
     
  };

  useEffect(() => {
    fetchTours()
  }, []);

  const removeTour = (id) => {
    const tour = tours.filter(t => t.id !== id)
    setTours(tour);
  };
  
  return (
    <main>
      <ToursList tours={tours} removeTour={removeTour} />
      {loading && <Loading />}
      {tours.length === 0 && (
          <main>
          <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={() => fetchTours()}>
              refresh
            </button>
          </div>
        </main>
      )}
    </main>
  )
}

export default App
