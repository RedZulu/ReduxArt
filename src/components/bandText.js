import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

export default class BandText extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount(){
      let $bandText1 = $('.bandText1');
      let $bandText2 = $('.bandText2');
      let $bandText = $('.bandTextDiv');

      let windowHeight = $(window).height();
      let specialHeight = ($('.special').height()*0.9).toString()+"px";

      let $bandHeight1 = ((windowHeight/2)*0.65).toString()+'px';
      let $bandHeight2 = ((windowHeight/2)*0.5).toString()+'px';

      $bandText1.css({'height': $bandHeight1});
      $bandText2.css({'height': $bandHeight2, 'bottom' : specialHeight});
      // $bandText.css({'bottom' : specialHeight});

      $(window).on('resize', function(){
        windowHeight = $(window).height();
        specialHeight = $('.special').height().toString()+"px";

        $bandHeight1 = ((windowHeight/2)*0.65).toString()+'px';
        $bandHeight2 = ((windowHeight/2)*0.5).toString()+'px';
        $bandText1.css({'height': $bandHeight1});
        $bandText2.css({'height': $bandHeight2, 'bottom' : specialHeight});
        // $bandText.css({'bottom' : specialHeight});
      })

      setTimeout(function(){ $(window).resize(); }, 1);
    }

    render() {
        return (
          <div className="bandTextDiv">
            <img className="bandText1" src="../../assets/bandText1.png" />
            <img className="bandText2" src="../../assets/bandText2.png" />
          </div>
        );
    }
}
