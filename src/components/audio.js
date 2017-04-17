import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default class Audio extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};

      // This binding is necessary to make `this` work in the callback
      this.playButton = this.playButton.bind(this);
    }

    playButton(e) {
      e.preventDefault();
      if (this.state.isToggleOn) {
        $('.audio-player').trigger('play');
      }else{
        $('.audio-player').trigger('pause');
      }
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }

    render() {
        return (
          <div>
            <audio className="audio-player" ref="audio_tag" src="../../assets/getF.mp3" controls/>
            <button className="play-button" onClick={this.playButton}>Play</button>
          </div>
        );
    }
}
