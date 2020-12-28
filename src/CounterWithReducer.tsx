import React, { useReducer } from 'react';

const initialState: StateType = { count: 0 };

//actionは、'decrement'か'increment' という文字列が渡る
type ActionType = { type: 'decrement' | 'increment' | 'reset' };

//stateはcountというプロパティを持つオブジェクト
type StateType = { count: number };

function reducer(state: StateType, action: ActionType): StateType | never {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      //この場合、関数が値を返さないのでnever型を指定
      throw new Error();
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
    </>
  );
}

export default CounterWithReducer;
