import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state: typeof initialState, action: { type: string }) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error();
  }
}

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="p-8 h-[90vh] w-full justify-center items-center flex flex-col text-white text-2xl font-semibold">
      <p className='uppercase tracking-[0.25rem]'>Count</p>
      <p className='my-4'>{state.count}</p>
      <div>
      <button
        className="rounded-full px-8 bg-red-500 text-white py-2 m-2"
        onClick={() => dispatch({ type: 'decrement' })}
      >
        -
      </button>
      <button
        className="rounded-full px-8 bg-yellow-500 text-white py-2 m-2 uppercase"
        onClick={() => dispatch({ type: 'reset' })}
      >
        Reset
      </button>
      <button
        className="rounded-full px-8 bg-green-500 text-white py-2 m-2"
        onClick={() => dispatch({ type: 'increment' })}
      >
        +
      </button>
      </div>

    </div>
  );
};

export default Counter;
