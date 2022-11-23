import React, { useState, useEffect } from 'react';

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
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <h1>{time}</h1>}
      <button onClick={fetchRomeTime}>Current Time</button>
    </div>
  );
};

export default Rome;
