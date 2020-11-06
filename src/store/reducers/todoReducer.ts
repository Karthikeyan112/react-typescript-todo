import {
  ADD_TODO,
  EDIT_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  StateI
} from '../actions/todoActionTypes';


export const initailState: StateI = {
  items: []
}

export const todoRecuder = (state: StateI = initailState, action: any) => {
  let newItems;
  switch (action.type) {
    case ADD_TODO:
      return { items: [...state.items, action.payload] }
    case REMOVE_TODO:
      newItems = state.items.filter(item => item.id !== action.payload)
      return { items: newItems };
    case EDIT_TODO:
      newItems = state.items.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isEditable: !item.isEditable }
        }
        return item;
      }, []);
      return { items: newItems };
    case UPDATE_TODO:
      newItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload
        }
        return item;
      }, []);
      return { items: newItems };
    default:
      return state;
  }
}
