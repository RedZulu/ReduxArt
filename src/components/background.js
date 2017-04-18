import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default class Background extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
          <div className="pink-background scrollUp"></div>
        );
    }
}
