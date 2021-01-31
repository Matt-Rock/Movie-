import React, { useEffect, useState } from 'react';
import { apiGet } from './misc/apiFunctions';
import Card from './components/Card';
import Search from './components/Search';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiGet().then(r => setData(r.results));
  }, []);

  const updateData = string => {
    apiGet(string).then(r => {
      console.log(r.results);
      return setData(r.results);
    });
  };

  return (
    <>
      <Search setData={updateData} />
      <div className="movies-container">
        {data.length > 0 &&
          data.map(movie => <Card key={movie.id} {...movie} />)}
      </div>
    </>
  );
};

export default App;
