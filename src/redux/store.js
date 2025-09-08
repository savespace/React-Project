import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';

const ADD_COLUMN = 'ADD_COLUMN';
const ADD_CARD = 'ADD_CARD';
const UPDATE_SEARCHSTRING = 'UPDATE_SEARCHSTRING';
const ADD_LIST = 'ADD_LIST';
const TOGGLE_CARD_FAVORITE = 'TOGGLE_CARD_FAVORITE';

export const addColumn = payload => ({ type: ADD_COLUMN, payload });
export const addCard = payload => ({ type: ADD_CARD, payload });
export const updateSearchString = payload => ({ type: UPDATE_SEARCHSTRING, payload });
export const addList = payload => ({ type: ADD_LIST, payload });
export const toggleCardFavorite = cardId => ({ type: TOGGLE_CARD_FAVORITE, payload: cardId });

export const getAllLists = state => state.lists;
export const getAllCards = (state) => state.cards;
export const getListById = (state, listId) => state.lists.find(list => list.id === listId);
export const getAllColumns = state => state.columns;
export const getColumnsByList = (state, listId) =>
  state.columns.filter(column => column.listId === listId);
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getFavoriteCards = state =>
  state.cards.filter(card => card.isFavorite);

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_COLUMN:
      return {
        ...state,
        columns: [...state.columns, { id: shortid(), ...action.payload }]
      };
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, { id: shortid(), isFavorite: false, ...action.payload }]
      };
    case ADD_LIST:
      return {
        ...state,
        lists: [...state.lists, { id: shortid(), ...action.payload }]
      };
    case UPDATE_SEARCHSTRING:
      return {
        ...state,
        searchString: action.payload
      };
    case TOGGLE_CARD_FAVORITE:
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card
        )
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
