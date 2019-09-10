export const setEmoji = (emoji) => dispatch => {
    dispatch({
        type: SET_EMOJI,
        payload: emoji
    })
};

export const togglePicker = () => dispatch => {
    dispatch({
        type: TOGGLE_PICKER
    })
};

export const SET_EMOJI = 'SET_EMOJI';
export const TOGGLE_PICKER = 'TOGGLE_PICKER';