import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Form from './components/Form';
import { StateI } from './store/actions/todoActionTypes';
import Todos from './components/Todos';
type selectorState = {
  todoRecuder: StateI
}

function App() {
  const items = useSelector((state: selectorState) => state.todoRecuder.items)
  return (
    <div className="App">
      <Form />
      <Todos items={items} />
    </div>
  );
}

export default App;
