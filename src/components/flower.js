import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default class Flowers extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount(){

      let $flower1 = $('.flower1');
      let $flower2 = $('.flower2');
      let $flowers = $('.flowers');

      let $flHeight = '-'+($flower1.height()/2).toString()+'px';
      $flower1.css({'bottom': $flHeight});
      $flower2.css({'bottom': $flHeight});

      $(window).on('resize', function(){
        $flHeight = '-'+($flower1.height()/2).toString()+'px';
        $flower1.css({'bottom': $flHeight});
        $flower2.css({'bottom': $flHeight});
      })

    }

    render() {
        return (
          <div className="flowers row">
            <img className="flower1 col-xs-2 col-xs-offset-2" src="../../assets/flower1.png" />
            <img className="flower2 col-xs-2 col-xs-offset-4" src="../../assets/flower2.png" />
          </div>
        );
    }
}
