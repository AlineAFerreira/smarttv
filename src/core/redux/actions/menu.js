import { TOGGLE_MENU } from '../types/menu';

export const toggleMenu = ( state, callbackFn ) => ({
  type: TOGGLE_MENU,
  menuIsOpen: state,
  lastComponent: callbackFn
})
