import produce from 'immer';

const initialState = {
  movies: [],
  favs: [],
};

const card = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'GET_MOVIES': {
        break;
      }

      case 'GET_MOVIES_SUCESS': {
        draft.movies = action.movies;
        break;
      }

      case 'GET_MOVIES_FAILURE': {
        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default card;
