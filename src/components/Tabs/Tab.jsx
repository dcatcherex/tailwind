import React from 'react';

const Tab = ({ label, children, activeTab, onClick }) => {
  return (
    <div
      className={`tab-item ${activeTab ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
      {activeTab && <div className="tab-content">{children}</div>}
    </div>
  );
};

export default Tab;

