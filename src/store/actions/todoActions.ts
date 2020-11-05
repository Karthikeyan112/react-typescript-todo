import {
  ADD_TODO,
  REMOVE_TODO,
  PayloadI,
  AddTodoI
} from './todoActionTypes';

export const addTodo = (payload: PayloadI): AddTodoI => {
  return {
    type: ADD_TODO,
    payload
  }
}

export const removeTodo = (id: string) => {
  return {
    type: REMOVE_TODO,
    payload: id
  }
}