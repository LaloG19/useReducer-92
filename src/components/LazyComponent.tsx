import React from 'react';

const LazyComponent: React.FC = () => {
  return <div className="p-4 bg-[#353535] absolute bottom-0 w-full text-white font-bold tracking-[0.25rem] rounded-t-3xl"> Este componente es cargado con Lazy-Load. </div>;
};

export default LazyComponent;
