import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHooks } from './components/01-useState/CounterWithCustomHooks';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
// import { FormWithCustomHooks } from './components/02-useEffect/FormWithCustomHooks';
// import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';
// import { FocusScreen } from './components/04-useRef/FocusScreen';
// import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// import { Layout } from './components/05-useLayoutEffect/Layout';
// import { Memorize } from './components/06-memos/Memorize';
// import { MemoHooks } from './components/06-memos/MemoHook';
// import { CallbackHooks } from './components/06-memos/CallbackHooks';
import { Padre } from './components/07-tarea-memo/Padre';

ReactDOM.render(
    <Padre />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

