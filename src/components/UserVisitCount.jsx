import  { useState, useEffect } from 'react';

const UserVisitCount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const visitTimestamps = localStorage.getItem('visitTimestamps');
    if (visitTimestamps) {
      const timestampsArray = JSON.parse(visitTimestamps);
      const todayDate = new Date().toLocaleDateString();
      const todayVisits = timestampsArray.filter(timestamp => timestamp === todayDate).length;
      setCount(todayVisits);
      localStorage.setItem('visitTimestamps', JSON.stringify([...timestampsArray, todayDate]));
    } else {
      localStorage.setItem('visitTimestamps', JSON.stringify([new Date().toLocaleDateString()]));
      setCount(1);
    }
  }, []);

  return (
    <div>
      <p>You have visited this website {count} time(s) today.</p>
    </div>
  );
};

export default UserVisitCount;