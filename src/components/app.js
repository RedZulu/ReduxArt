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
    let executed = false;

    $(document).keyup(function(evt) {
      if (evt.keyCode == 32) {
       space = false;
       $('.audio-player').finish();
       fadeOut();
       rotate($flower1,500000,-3600000);
       $('.crt-flashes-eye1').show();
       $('.crt-rainbows-eye1').hide();
       $('.crt-flashes-eye2').hide();
       $('.crt-rainbows-eye2').show();
       rotate($flower2,500000,-3600000);
       $( ".pink-background" ).removeClass( "scrollDown" ).addClass( "scrollUp" );
      }
    }).keydown(function(evt) {
     if (evt.keyCode == 32) {
       space = true;
       $('.audio-player').trigger('play');
       if (!executed) {
            executed = true;
            $('.audio-player')[0].volume = 0;
       }
       fadeIn();
       rotate($flower1,40000,3600000);
       rotate($flower2,40000,3600000);
       $('.crt-flashes-eye1').hide();
       $('.crt-rainbows-eye1').show();
       $('.crt-flashes-eye2').show();
       $('.crt-rainbows-eye2').hide();
       $( ".pink-background" ).removeClass( "scrollUp" ).addClass( "scrollDown" );
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

    rotate($flower1,500000,-3600000);
    rotate($flower2,500000,-3600000);

    function fadeIn(){
      return $('.audio-player').animate({volume: 1}, 1000);
    }

    function fadeOut(){
      return $('.audio-player').animate({volume: 0}, 1000, function () {
        $('.audio-player').trigger('pause');
     });
    }
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
