import React, { useReducer } from 'react';

export const initialState = {
  name: '',
  email: '',
};

export function formReducer(state, action) {
  switch (action.type) {
    case 'setName':
      return {
        ...state,
        name: action.payload,
      };
    case 'setEmail':
      return {
        ...state,
        email: action.payload,
      };
    default:
      throw new Error();
  }
}
