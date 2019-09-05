export const setEmoji = (emoji) => dispatch => {
    dispatch({
        type: SET_EMOJI,
        payload: emoji
    })
};

export const SET_EMOJI = 'SET_EMOJI';