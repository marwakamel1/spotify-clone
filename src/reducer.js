import { combineReducers } from "redux";
import {
  SET_AUTHED_USER,
  DELETE_AUTHED_USER,
  SET_TOKEN,
  SET_PLAYLISTS,
  SET_DISCOVER_WEEKLY,
  SET_ITEM,
  SET_PLAYING,
} from "./actions";
import { loadingBarReducer } from "react-redux-loading";

function token(state = null, action) {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
}

function discoverWeekly(state = [], action) {
  switch (action.type) {
    case SET_DISCOVER_WEEKLY:
      return { ...state, playlists: action.playlists };
    default:
      return state;
  }
}

function user(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return { ...state, user: action.user };
    case DELETE_AUTHED_USER:
      return null;
    default:
      return state;
  }
}
function playlists(state = {}, action) {
  switch (action.type) {
    case SET_PLAYLISTS:
      return { ...state, playlists: action.playlists };
    default:
      return state;
  }
}
function playing(state = false, action) {
  switch (action.type) {
    case SET_PLAYING:
      return { ...state, playing: action.playing };
    default:
      return state;
  }
}
function item(state = null, action) {
  switch (action.type) {
    case SET_ITEM:
      return { ...state, item: action.item };
    default:
      return state;
  }
}
export default combineReducers({
  user,
  loadingBar: loadingBarReducer,
  token,
  playlists,
  discoverWeekly,
  playing,
  item,
});
