import { useState } from 'react';

const useCityTime = (requestConfig) => {
  const [time, setTime] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  const sendRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url);

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

  return {
    time,
    isLoading,
    error,
    sendRequest,
  };
};

export default useCityTime;
