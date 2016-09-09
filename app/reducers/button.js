import * as types from 'types';

/*
 * Message store for global messages, i.e. Network messages / Redirect messages
 * that need to be communicated on the page itself. Ideally
 * messages/notifications should appear within the component to give the user
 * more context. - My 2 cents.
 */
export default function button(state = {
  numClicks: 0,
  showGame: false
}, action = {}) {
  switch (action.type) {
    case types.CLICK_BUTTON:
      return { ...state, numClicks: state.numClicks + 1 }
    case types.REVEAL_GAME:
      return { ...state, showGame: true }
    default:
      return state;
  }
}
