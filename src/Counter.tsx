import React, { useState } from 'react';
//useStateを使う場合は、型引数を指定する。それによりuseStateが返す関数が型制約をもつ

const Couter: React.FC<{}> = () => {
  //FunctionComponentを初略してFC
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);
  //valueにアノテーションを適用するには、useStateにジェネリクスを適用

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };
  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Couter;
