import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
      {/* Permanent low-opacity blueprint grid system */}
      <div className="blueprint-grid-system" />
    </div>
  );
};

export default Background;