import React from 'react';
import { PayloadI } from '../store/actions/todoActionTypes';
import Todo from './Todo';

type PropsI = {
  items: PayloadI[]
}
const Todos = ({ items }: PropsI) => {

  return (
    <div className='todos'>
      {items && items.map(((item: PayloadI) => (
        <Todo key={item.id} item={item} />
      )))}
    </div>
  )
}

export default Todos;