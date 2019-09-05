import React, { Component } from 'react';
import { connect } from 'react-redux';

class EmojiButton extends Component {
    render() {
        return (
            <div className="emoji-button">
                    <button type="button">
                        CLICK ME
                    </button>
            </div>
        )
    }
}

export default connect()(EmojiButton);