import React from 'react';
import Counter from './Counter';
//Functionコンポーネントはを使う場合、必ず関数に対してアノテーションをしてジェネリクス型でpropsの型を指定する

interface AppProps {
  message?: string;
}

//React.FunctionComponentでコンポーネントに対する型制約が可能。また、型引数を受け取れる
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  //Typescriptでpropsのアノテーションするには、{ message }: { message: string }のように記述。これで、渡されるpropsはmessageのみ、その型はstring型となる
  return (
    <div>
      <Counter />
    </div>
  );
};

App.defaultProps = {
  //外からmessageを受け取らなかった場合のデフォルトのpropsを指定できる
  message: 'Hell, defaultProps!',
};

export default App;
