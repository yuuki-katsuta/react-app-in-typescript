import React, { useEffect, useRef, useState } from 'react';
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

  const renderTimes = useRef<number>(0);
  //値はcurrentというメンバ名で参照できる(renderTimes.current)
  //useRefにも型引数を指定できる

  //render毎に実行
  useEffect(() => {
    renderTimes.current += 1;
  });

  const ref = useRef<HTMLInputElement>(null!);
  //refをRefObject型にするために、useRefに型引数<HTMLInputElement>を指定する
  //inputのrefに指定した場合、そのinput要素に対する参照をもつ

  const focusInput = () => {
    //useRefをnullで初期化しているので、ref.currentがnullではなかった場合適用させる
    //ref.currentはinput要素に対する参照を保持する
    // const current = ref.current;
    // if (current != null) current.focus();

    //current?でnullの場合はfocusの実行をしない
    //ref.current?.focus();

    //useRef<HTMLInputElement>null!とすることで、その直前のデータ型はnull型ではないということをコンパイラに知らせることができる(null!の!をNon-Null Assertion Operatorという)
    ref.current?.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current}</div>
      <input ref={ref} type='text' />
      <button onClick={focusInput}>Click Me!</button>
    </div>
  );
};

export default Couter;
