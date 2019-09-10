import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import EmojiDisplayer from './components/EmojiDisplayer';
import EmojiButton from './components/EmojiButton';
import EmojiPicker from './components/EmojiPicker';
import TetherComponent from 'react-tether';
import { togglePicker } from './redux/actions';

class App extends Component {
  tether = null;

  render() {
    return (
      <div className="App">
        <h1>Emoji Picker</h1>
        <EmojiDisplayer />
        <TetherComponent
          ref={tether => {
            this.tether = tether;
          }}
          attachment="top center"
          renderTarget={ref => (
              <div ref={ref} >
                <EmojiButton />
              </div>
          )}
          renderElement={ref =>
            this.props.displayPicker && (
              <div ref={ref}>
                <EmojiPicker />
              </div>
            )
          }
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    displayPicker: state.emoji.displayPicker,
  };
};

const mapDispatchToProps = {
  togglePicker,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
