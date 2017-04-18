import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default class Audio extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
          <div>
            <audio className="audio-player" ref="audio_tag" src="../../assets/getF.mp3" controls/>
          </div>
        );
    }
}
