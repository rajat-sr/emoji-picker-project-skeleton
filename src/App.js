import React, { Component } from 'react';
import './App.css';
import EmojiDisplayer from './components/EmojiDisplayer';
import EmojiButton from './components/EmojiButton';
import { connect } from 'react-redux';
import EmojiPicker from './components/EmojiPicker';
import TetherComponent from 'react-tether';
import { togglePicker } from './redux/actions';

class App extends Component {
  tether = null;
  container = null;
  attachments = ['top center', 'middle left', 'bottom center', 'middle right'];
  state = { on: true, attachment: this.attachments[0] };

  componentDidMount() {
    // Rerender with the container ref
    this.setState({});
  }

  toggleTooltip = () => {
    this.setState(({ on }) => {
      return { on: !on };
    });
  };

  cycleAttachment = () => {
    const { attachment } = this.state;
    let nextAttachment = this.attachments.indexOf(attachment) + 1;
    if (nextAttachment === this.attachments.length) {
      nextAttachment = 0;
    }
    this.setState(() => ({
      attachment: this.attachments[nextAttachment],
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Emoji Picker</h1>
        <EmojiDisplayer />
        {
          <div
            ref={container => {
              this.container = container;
            }}
          >
            {this.container && (
              <TetherComponent
                ref={tether => {
                  this.tether = tether;
                }}
                attachment={this.state.attachment}
                constraints={[
                  {
                    to: this.container,
                    attachment: 'together',
                  },
                ]}
                renderTarget={ref => (
                  <div ref={ref}>
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
              ></TetherComponent>
            )}
          </div>
        }
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


export default connect(mapStateToProps, mapDispatchToProps)(App);
