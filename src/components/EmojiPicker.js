import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categories, emojis } from './emojis';
import unicodeMap from 'emoji-unicode-map';
import { setEmoji, togglePicker } from '../redux/actions';
class EmojiPicker extends Component {
  categoryNames = [
    'people',
    'nature',
    'foods',
    'activity',
    'places',
    'objects',
    'symbols',
    'flags',
  ];

  state = {
    currentCategory: 'people',
    hoveredOn: 'none',
  };

  setCategory = category => {
    this.setState({ currentCategory: category });
  };

  chooseEmoji = emoji => {
    const { setEmoji, togglePicker } = this.props;
    setEmoji(emoji);
    togglePicker();
  };

  setTooltip = emoji => {
    const emojiName = unicodeMap.get(emoji) ? unicodeMap.get(emoji) : 'none';
    this.setState({ hoveredOn: emojiName });
  };

  render() {
    const { currentCategory, hoveredOn } = this.state;

    const categoryRow = this.categoryNames.map(category => (
      <li
        key={category}
        onClick={() => this.setCategory(category)}
        onMouseOver={() => this.setState({ hoveredOn: category })}
      >
        {categories[category]}
      </li>
    ));

    const emojiList = emojis[currentCategory];
    const emojiGrid = emojiList.map(emoji => (
      <div
        className="emoji"
        key={emoji}
        onClick={() => this.chooseEmoji(emoji)}
        onMouseOver={() => this.setTooltip(emoji)}
      >
        {emoji}
      </div>
    ));

    return (
      <div className="emoji-picker" onMouseOut={() => this.setState({ hoveredOn: 'none' })}>
        <div className="emoji-name">{hoveredOn}</div>
        <div className="emoji-picker-emojis">{emojiGrid}</div>
        <ul className="emoji-picker-category">{categoryRow}</ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setEmoji: emoji => dispatch(setEmoji(emoji)),
    togglePicker: () => dispatch(togglePicker()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(EmojiPicker);
