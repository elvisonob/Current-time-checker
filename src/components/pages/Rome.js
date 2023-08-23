import React, { useEffect } from 'react';
import Header from './Header';
import useCityTime from '../../components/hooks/use-city';

const Rome = () => {
  const {
    isLoading,
    time,
    error,
    sendRequest: fetchTasks,
  } = useCityTime({
    url: 'https://worldtimeapi.org/api/timezone/Europe/Rome',
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="timesetting">
      <Header />
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p style={{ color: 'red' }}>{error}</p>}
      {!isLoading && <h1 className="time-display">{time}</h1>}
      <button className="updatetime" onClick={fetchTasks}>
        Refresh
      </button>
    </div>
  );
};

export default Rome;
