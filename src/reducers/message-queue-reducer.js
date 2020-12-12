import { ADD_MESSAGE, DELETE_MESSAGE } from "../actions/message-queue-action";

const defaultMessageQueue = [];

export const messageQueueReducer=( state = defaultMessageQueue, action ) => {
  switch(action.type){
    case ADD_MESSAGE:
      return [...state,action.payload]
    case DELETE_MESSAGE:
      return state.filter(queue => queue.id !== action.payload);
    default:
      return state;
  }
}
