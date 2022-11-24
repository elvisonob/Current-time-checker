import React, { useState, useEffect } from 'react';
import Header from './Header';

const Paris = () => {
  const [time, setTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchParisTime();
  }, []);

  const fetchParisTime = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'http://worldtimeapi.org/api/timezone/Europe/Paris'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const t = data.datetime.split('');
      const updatedTime = `${t[11]}${t[12]}:${t[14]}${t[15]}:${t[17]}${t[18]}`;
      const splittedTime = updatedTime.split(':');
      const aMorPm = splittedTime[0] >= 12 ? 'PM' : 'AM';
      const hours = splittedTime[0] % 12 || 12;
      const finalTime = `${
        hours.toString().length === 1 ? `0${hours}` : hours
      }:${splittedTime[1]}:${splittedTime[2]} ${aMorPm}`;
      setTime(finalTime);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="timesetting">
      <Header />
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p style={{ color: 'red' }}>{error}</p>}
      {!isLoading && <h1>{time}</h1>}
      <button className="updatetime" onClick={fetchParisTime}>
        Refresh
      </button>
    </div>
  );
};

export default Paris;
