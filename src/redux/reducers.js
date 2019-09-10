import { combineReducers } from 'redux';
import { SET_EMOJI, TOGGLE_PICKER } from './actions';

let intialState = {
    displayPicker: false
}

let emojiReducer = (state = intialState, action) => {
    switch (action.type) {
        case SET_EMOJI :
            return { ...state,
                setEmoji: action.payload,
            }
        case TOGGLE_PICKER :
            return {
                ...state,
                displayPicker: !state.displayPicker
            }
        default :
            return state
    }
}

export default combineReducers({
    emoji: emojiReducer
});