import React, { Component } from 'react';
import { connect } from 'react-redux';
import { categories, emojis } from './emojis';
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
  };

  chooseCategory = category => {
    this.setState({ category });
  };

  selectEmoji = emoji => {
    this.props.setEmoji(emoji);
    this.props.togglePicker();
  }

  render() {
    const categoryRow = this.state.categoryNames.map(category => (
      <li key={category} onClick={() => this.chooseCategory(category)}>
        {categories[category]}
      </li>
    ));

    const emojiList = emojis[this.state.category];
    const emojiListComponent = emojiList.map(emoji => (
      <div className="emoji" key={emoji} onClick={() => this.selectEmoji(emoji)}>
        {emoji}
      </div>
    ));

    return (
      <div className="emoji-picker">
        <div className="emoji-picker-emojis">{emojiListComponent}</div>
        <ul className="emoji-picker-category">{categoryRow}</ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setEmoji: (emoji) => dispatch(setEmoji(emoji)),
    togglePicker: () => dispatch(togglePicker())
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(EmojiPicker);
