import React, { Suspense, lazy } from 'react';
import Counter from './components/Counter';
import './App.css';

const LazyComponent = lazy(() => import('./components/LazyComponent'));

const App: React.FC = () => {
  return (
    <div className="App bg-[#111] min-w-full min-h-screen h-full">
      <h1 className='bg-[#353535] text-white text-2xl uppercase tracking-[0.25rem] text-center p-4 rounded-b-3xl'> Usando useReducer y LazyLoadding </h1>
      <Counter />
      <Suspense fallback={<div> Cargando... </div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;
