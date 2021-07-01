import axios from "axios";

const SET_STORY = "SET_STORY";

export const setStory = (story) => {
  return {
    type: SET_STORY,
    story,
  };
};

export const fetchStory = (storyId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/stories/${storyId}`);
      dispatch(setStory(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_STORY:
      return action.story;
    default:
      return state;
  }
};
