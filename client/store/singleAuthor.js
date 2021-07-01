import axios from "axios";

const SET_AUTHOR = "SET_AUTHOR";

export const setAuthor = (author) => {
  return {
    type: SET_AUTHOR,
    author,
  };
};

export const fetchAuthor = (authorId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/authors/${authorId}`);
      dispatch(setAuthor(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHOR:
      return action.author;
    default:
      return state;
  }
};
