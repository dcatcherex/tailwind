import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="tabs">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          onClick: () => handleClick(index),
          activeTab: activeTabIndex === index,
        })
      )}
    </div>
  );
};

export default Tabs;