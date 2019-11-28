import React from 'react';

const Panels = ({ children }) => {
  return (
    <div className="date-picker__panels">
      {children}
    </div>
  );
};

export default Panels;