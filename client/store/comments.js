import axios from "axios";

const SET_COMMENTS = "SET_COMMENTS";

export const setComments = (comments) => {
  return {
    type: SET_COMMENTS,
    comments,
  };
};

export const fetchStoryComments = (storyId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/stories/${storyId}`);
      dispatch(setComments(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchAuthorComments = (authorId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/authors/${authorId}/comments`);
      dispatch(setComments(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return action.comments;
    default:
      return state;
  }
};
