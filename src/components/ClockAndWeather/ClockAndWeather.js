import styles from './ClockAndWeather.module.css'

import React, { useState, useEffect } from 'react';

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <div className={styles.clock}>
      <div className={styles.glow}>
        {hours < 10 ? '0' : ''}
        {hours}:{minutes < 10 ? '0' : ''}
        {minutes}:{seconds < 10 ? '0' : ''}
        {seconds}
      </div>
    </div>
    
  );
};
















// import React, { useState, useEffect } from 'react';

// export const Clock = ()=> {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className={styles.Clock}>
//       {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })}
//     </div>
//   );
// }



