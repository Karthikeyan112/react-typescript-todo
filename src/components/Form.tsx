import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../store/actions/todoActions';

const Form = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const submitForm = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(addTodo({ id: uuidv4(), name: task, isActive: false }));
    setTask('');
  }
  return (
    <form className='form' >
      <input type='text' placeholder='Enter a task' value={task} onChange={(e) => setTask(e.target.value)} />
      <button type='submit' onClick={submitForm}>Submit</button>
    </form>
  )
}

export default Form;
