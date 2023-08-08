import React, { useEffect } from 'react';
import Header from './Header';
import './London.css';
import useCityTime from '../../components/hooks/use-city';

const London = () => {
  const {
    isLoading,
    time,
    error,
    sendRequest: fetchTasks,
  } = useCityTime({
    url: 'https://worldtimeapi.org/api/timezone/Europe/London',
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="timesetting">
      <Header />
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p style={{ color: 'red' }}>{error}</p>}
      {!isLoading && <h1>{time}</h1>}
      <button className="updatetime" onClick={fetchTasks}>
        Refresh
      </button>
    </div>
  );
};

export default London;
