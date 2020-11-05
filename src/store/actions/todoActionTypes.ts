export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export type ActiosnTypeI = typeof ADD_TODO | typeof REMOVE_TODO;

export type PayloadI = {
  id: string,
  name: string,
  isActive: boolean
}

export type StateI = {
  items: PayloadI[]
}

export type AddTodoI = {
  type: ActiosnTypeI,
  payload: PayloadI
}
