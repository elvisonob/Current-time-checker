import React, { useState, useEffect } from 'react';
import Header from './Header';

const Rome = () => {
  const [time, setTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRomeTime();
  }, []);

  const fetchRomeTime = async () => {
    setIsLoading(true);
    const response = await fetch(
      'http://worldtimeapi.org/api/timezone/Europe/Rome'
    );
    const data = await response.json();
    setTime(data.datetime);
    setIsLoading(false);
  };

  return (
    <div className="timesetting">
      <Header />
      {isLoading && <p>Loading...</p>}
      {!isLoading && <h1>{time}</h1>}
      <button className="updatetime" onClick={fetchRomeTime}>
        Current Time
      </button>
    </div>
  );
};

export default Rome;
