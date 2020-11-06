import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
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

export const editTodo = (id: string) => {
  return {
    type: EDIT_TODO,
    payload: id
  }
}

export const updateTodo = (payload: PayloadI) => {
  return {
    type: UPDATE_TODO,
    payload
  }
}
