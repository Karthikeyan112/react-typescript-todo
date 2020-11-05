import React from 'react';
import { useDispatch } from 'react-redux'
import { PayloadI } from '../store/actions/todoActionTypes';
import { removeTodo } from '../store/actions/todoActions';

type PropsI = {
  items: PayloadI[]
}
const Todos = ({ items }: PropsI) => {
  const dispatch = useDispatch();
  const removeItem = (id: string) => {
    console.log(id);
    dispatch(removeTodo(id));
  }
  return (
    <div className='todos'>
      {items && items.map(((item: PayloadI) => (
        <div className='todos__item' key={item.id}>
          <p>{item.name}</p>
          <button className="todos__btn" onClick={() => removeItem(item.id)}>Delete</button>
        </div>
      )))}
    </div>
  )
}

export default Todos;