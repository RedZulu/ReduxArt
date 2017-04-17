import React, { Component } from 'react';
import Audio from './audio';
import Background from './background';
import SpecialCats from './special';
import Flowers from './flower';
import BandText from './bandText';
import Eye from './eye';

export default class App extends Component {

  componentDidMount(){
    let space = false;

    $(document).keyup(function(evt) {
      if (evt.keyCode == 32) {
       space = false;
       rotate($flower1,1000000,3600000);
       rotate($flower2,1000000,3600000);
       $('.crt-flashes-eye1').show();
       $('.crt-rainbows-eye1').hide();
       $('.crt-flashes-eye2').hide();
       $('.crt-rainbows-eye2').show();
      }
    }).keydown(function(evt) {
     if (evt.keyCode == 32) {
       space = true;
       rotate($flower1,40000,3600000);
       rotate($flower2,40000,3600000);
       $('.crt-flashes-eye1').hide();
       $('.crt-rainbows-eye1').show();
       $('.crt-flashes-eye2').show();
       $('.crt-rainbows-eye2').hide();
     }
    });

    let $flower1 = $('.flower1');
    let $flower2 = $('.flower2');
    let $flowers = $('.flowers');

    function rotate(x, timespan, degrees){
      let tl = new TimelineMax();
      tl.to(x,  timespan, {rotation:degrees, repeat:-1})
      tl.play();
    }

    rotate($flower1,1000000,3600000);
    rotate($flower2,1000000,3600000);
  }

  render() {
    return (
      <div className="app-view">
        <Background />
        <BandText />
        <SpecialCats />
        <Audio />
        <Flowers />
        <Eye />
      </div>
    );
  }
}
