import {ADD_COMMENT, REMOVE_COMMENT, EDIT_COMMENT, THUMB_UP, THUMB_DOWN} from './action';

function comments(state = [], action) {
  switch(action.type) {
    case ADD_COMMENT:
      comments: [
          {
            id: action.id,
            text: action.text,
            votes: 0
          },
          ...state.comments
        ];

      case REMOVE_COMMENT:
        comments: state.comments.filter(comment => comment.id !== action.id)

      case EDIT_COMMENT:
        comments: [
            {
              id: action.id,
              text: action.text,
              votes: 0
            },
            ...state
          ];

      case THUMB_UP:
        comments: [
          {
            id: action.id,
            text: action.text,
            votes: state.comments.votes += 1
          },
          ...state
        ];

      case THUMB_DOWN:
        comments: [
          {
            id: action.id,
            text: action.text,
            votes: state.comments.votes -= 1
          },
          ...state
        ];

    default:
      return state;
  }
};

export default comments;
