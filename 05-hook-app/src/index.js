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
// import { Padre } from './components/07-tarea-memo/Padre';
// import './components/08-useReducer/intro-reducer'
import { TodoApp } from './components/08-useReducer/TodoApp';

ReactDOM.render(
    <TodoApp />,
  document.getElementById('root')
);


