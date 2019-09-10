import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setEmoji, togglePicker } from './../redux/actions';

class EmojiButton extends Component {
  render() {
    return (
      <div className="emoji-button">
        <button type="button" onClick={() => this.props.togglePicker()}>
          CLICK ME
        </button>
      </div>
    );
  }
}
const mapDispatchToProps = {
  togglePicker,
};

export default connect(
  null,
  mapDispatchToProps,
)(EmojiButton);
