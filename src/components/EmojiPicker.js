import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categories, emojis } from './emojis';
import unicodeMap from 'emoji-unicode-map';
import { setEmoji, togglePicker } from '../redux/actions';
class EmojiPicker extends Component {
  state = {
    categoryNames: [
      'people',
      'nature',
      'foods',
      'activity',
      'places',
      'objects',
      'symbols',
      'flags',
    ],
    category: 'people',
    hovered: 'none',
  };

  chooseCategory = category => {
    this.setState({ category });
  };

  selectEmoji = emoji => {
    this.props.setEmoji(emoji);
    this.props.togglePicker();
  };

  setTooltip = emoji => {
    const text = unicodeMap.get(emoji) ? unicodeMap.get(emoji) : 'none';
    this.setState({ hovered: text });
  };

  render() {
    const categoryRow = this.state.categoryNames.map(category => (
      <li
        key={category}
        onClick={() => this.chooseCategory(category)}
        onMouseOver={() => this.setState({ hovered: category })}
      >
        {categories[category]}
      </li>
    ));

    const emojiList = emojis[this.state.category];
    const emojiListComponent = emojiList.map(emoji => (
      <div
        className="emoji"
        key={emoji}
        onClick={() => this.selectEmoji(emoji)}
        onMouseOver={() => this.setTooltip(emoji)}
      >
        {emoji}
      </div>
    ));

    return (
      <div className="emoji-picker" onMouseOut={() => this.setState({ hovered: 'none' })}>
        <div className="emoji-name">{this.state.hovered}</div>
        <div className="emoji-picker-emojis">{emojiListComponent}</div>
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
