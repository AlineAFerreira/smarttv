import { TOGGLE_KEYBOARD_EVENTS, TOGGLE_MENU } from '../types/menu';

const initialState = {
  menuIsOpen: false,
  lastComponent: null
};

const menu = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_MENU:
        return {
          ...state,
          menuIsOpen: action.menuIsOpen,
          lastComponent: action.lastComponent
        }
      default:
        return state
    }
  }
  
  export default menu;