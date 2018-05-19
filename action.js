import React from 'React';
import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP = 'THUMB_UP';
const THUMB_DOWN = 'THUMB_DOWN';

const addComment = (text, userName) =>
  return {
    type: ADD_COMMENT,
    payload: {
      text,
      userName,
    },
    id: uuis.v4()
  };
const boundAddComment = (text, userName) =>
dispatch(addComment());

const removeComment = id =>
  return {
    type: REMOVE_COMMENT,
    payload: {
      id
    }
  };
const boundRemoveComment = (id) =>
dispatch(removeComment());

const editComment = (text, id) =>
  return {
    type: EDIT_COMMENT,
    payload: {
      text,
      id
    }
  };
const boundEditComment = (text, id) =>
dispatch(editComment());

const thumbUp = id =>
  return {
    type: THUMB_UP,
    payload: {
      id
    }
  };
const boundThumbUp = (id) =>
dispatch(thumbUp());

const thumbDown = id =>
  return {
    type: THUMB_DOWN,
    payload: {
      id
    }
  };
const boundThumbDown = (id) =>
dispatch(thumbDown());
