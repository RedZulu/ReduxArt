import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default class Background extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount(){

      // $(document).keyup(function(evt) {
      //   if (evt.keyCode == 32) {
      //    space = false;
      //    rotate($flower1,1000000,3600000);
      //    rotate($flower2,1000000,3600000);
      //   }
      // }).keydown(function(evt) {
      //  if (evt.keyCode == 32) {
      //    space = true;
      //    rotate($flower1,20000,3600000);
      //    rotate($flower2,20000,3600000);
      //  }
      // });
    }

    render() {
        return (
          <div className="pink-background"></div>
        );
    }
}
