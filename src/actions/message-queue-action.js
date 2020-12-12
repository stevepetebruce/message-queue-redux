export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const addMessage = (item) => {
  return {
    type:ADD_MESSAGE,
    payload:item
  }
}

export const deleteMessage = (id) => {
  return {
    type:DELETE_MESSAGE,
    payload:id
  }
}