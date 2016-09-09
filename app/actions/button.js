import * as types from 'types';

export function buttonClick() {
  return { type: types.CLICK_BUTTON };
}

export function revealGame() {
  return { type: types.REVEAL_GAME };
}
