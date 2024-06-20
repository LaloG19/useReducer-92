import React, { Suspense, lazy } from 'react';
import Counter from './components/Counter';
import './App.css';

const LazyComponent = lazy(() => import('./components/LazyComponent'));

const App: React.FC = () => {
  return (
    <div className="App bg-[#111] min-w-full min-h-screen h-full">
      <h1 className='bg-[#353535] text-white text-2xl uppercase tracking-[0.25rem] text-center p-4 rounded-b-3xl'> Usando useReducer y LazyLoadding </h1>
      <Counter />
      <Suspense fallback={<div className='p-4 bg-red-500 absolute bottom-0 w-screen text-purple-500 font-bold tracking-[0.25rem] rounded-t-3xl'> Cargando... </div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;
