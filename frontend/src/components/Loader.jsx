import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="loader w-16 h-16 border-b-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;