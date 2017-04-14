import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default class SpecialCats extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount(){
      let specialHeight = $('.special').height();
      let windowHeight = $(window).height();
      let specialPercent = $('.special').height()*.4;
      let totalHeight = ((windowHeight - specialHeight)+specialPercent).toString() + 'px';

      $('.cat1').css({'height': totalHeight});
      $('.cat2').css({'height': totalHeight});
      $(window).on('resize', function(){
        specialHeight = $('.special').height();
        windowHeight = $(window).height();
        specialPercent = $('.special').height()*.4;
        totalHeight = ((windowHeight - specialHeight)+specialPercent).toString() + 'px';
        $('.cat1').css({'height': totalHeight});
        $('.cat2').css({'height': totalHeight});
      })
    }

    render() {
        return (
          <div className="cat-special">
            <div className="cats">
              <img className="cat1" src="../../assets/cat1.png" />
              <img className="cat2" src="../../assets/cat2.png" />
              <img className="special" src="../../assets/special.png" />
            </div>
          </div>
        );
    }
}
