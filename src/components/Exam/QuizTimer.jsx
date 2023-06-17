import React, { useState, useEffect } from 'react';

const QuizTimer = ({ totalTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    let timer = null;

    if (timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else {
      onTimeUp();
    }

    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    


    return `${hours > 0 ? `${hours}:` :''}${minutes < 10 ? `0${minutes}`  : `${minutes}` }:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <p>{formatTime(timeLeft)}</p>
    </div>
  );
};

export default QuizTimer;




// import { useState, useEffect } from 'react';

// const QuizTimer = ({ totalTime, onTimeUp }) => {
//   const [timeLeft, setTimeLeft] = useState(totalTime);

//   useEffect(() => {
//     let timer = null;

//     if (timeLeft > 0) {
//       timer = setTimeout(() => {
//         setTimeLeft(timeLeft - 1);
//       }, 1000);
//     } else {
//       onTimeUp();
//     }

//     return () => clearTimeout(timer);
//   }, [timeLeft, onTimeUp]);

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   return (
//     <div>
//       <p>{formatTime(timeLeft)}</p>
//     </div>
//   );
// };

// export default QuizTimer;
