export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const DELETE_AUTHED_USER = "DELETE_AUTHED_USER";
export const SET_TOKEN = "SET_TOKEN";
export const SET_PLAYLISTS = "SET_PLAYLISTS";
export const SET_DISCOVER_WEEKLY = "SET_DISCOVER_WEEKLY";
export const SET_ITEM = "SET_ITEM";
export const SET_PLAYING = "SET_PLAYING";

export function setUser(user) {
  return {
    type: SET_AUTHED_USER,
    user,
  };
}
export function setDiscoverWeekly(playlists) {
  return {
    type: SET_DISCOVER_WEEKLY,
    playlists,
  };
}
export function setPlaylists(playlists) {
  return {
    type: SET_PLAYLISTS,
    playlists,
  };
}
export function deleteUser(id) {
  return {
    type: DELETE_AUTHED_USER,
    id,
  };
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token,
  };
}

export function setItem(item) {
  return {
    type: SET_ITEM,
    item,
  };
}
export function setPlaying(playing) {
  return {
    type: SET_PLAYING,
    playing,
  };
}
