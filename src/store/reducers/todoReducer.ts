import {
  ADD_TODO,
  REMOVE_TODO,
  StateI
} from '../actions/todoActionTypes';


export const initailState: StateI = {
  items: []
}

export const todoRecuder = (state: StateI = initailState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return { items: [...state.items, action.payload] }
    case REMOVE_TODO:
      const newItems = state.items.filter(item => item.id !== action.payload)
      return { items: newItems };
    default:
      return state
  }
}
