import { bindActionCreators } from "redux";

const SELECT_SINGLESTORY = 'SELECT_SINGLESTORY';

const initialState = '';

const selectSingleStories = (storyId) => {
  return {
    type: SELECT_SINGLESTORY,
    storyId
  }
}

const singleReducer = (state = initialState, action) => {
  if (action.type === SELECT_SINGLESTORY){
    return [...state, action.storyId]
  }
}
