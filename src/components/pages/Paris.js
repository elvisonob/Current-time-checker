import React, { useState, useEffect } from 'react';

const Paris = () => {
  const [time, setTime] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchParisTime();
  }, []);

  const fetchParisTime = async () => {
    setIsLoading(true);
    const response = await fetch(
      'http://worldtimeapi.org/api/timezone/Europe/Paris'
    );
    const data = await response.json();
    const t = data.datetime.split('');
    const updatedTime = `${t[11]}${t[12]}:${t[14]}${t[15]}:${t[17]}${t[18]}`;
    const splittedTime = updatedTime.split(':');
    const aMorPm = splittedTime[0] >= 12 ? 'PM' : 'AM';
    const hours = splittedTime[0] % 12 || 12;
    const finalTime = `${hours}:${splittedTime[1]}:${splittedTime[2]} ${aMorPm}`;

    console.log(finalTime);
    setTime(finalTime);
    console.log(data);
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <h1>{time}</h1>}
      <button onClick={fetchParisTime}>Current Time</button>
    </div>
  );
};

export default Paris;
