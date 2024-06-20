import React, { Suspense, lazy } from 'react';
import Counter from './components/Counter';
import './App.css';

const LazyComponent = lazy(() => import('./components/LazyComponent'));

const App: React.FC = () => {
  return (
    <div className="App bg-[#111] min-w-full min-h-screen h-full">
      <h1> Usando useReducer y LazyLoadding </h1>
      <Counter />
      <Suspense fallback={<div> Cargando... </div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;
