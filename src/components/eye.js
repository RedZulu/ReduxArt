import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default class Eye extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
          <div className="eyes">
            <div className="eye1">
              <img className="crt-flashes-eye1" src="../../assets/flashes.gif" />
              <img className="crt-rainbows-eye1" src="../../assets/rainbows.gif" />
            </div>
            <div className="eye2">
              <img className="crt-flashes-eye2" src="../../assets/flashes.gif" />
              <img className="crt-rainbows-eye2" src="../../assets/rainbows.gif" />
            </div>
          </div>
        );
    }
}
