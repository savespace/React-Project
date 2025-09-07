import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';

const ADD_COLUMN = 'app/columns/ADD_COLUMN';
const ADD_CARD = 'app/cards/ADD_CARD';

export const addColumn = payload => ({ type: ADD_COLUMN, payload });
export const addCard = payload => ({ type: ADD_CARD, payload });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return {
        ...state,
        columns: [
          ...state.columns,
          { id: shortid(), title: action.payload.title, icon: action.payload.icon },
        ],
      };
    case ADD_CARD:
      return {
        ...state,
        cards: [
          ...state.cards,
          { id: shortid(), columnId: action.payload.columnId, title: action.payload.title },
        ],
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
