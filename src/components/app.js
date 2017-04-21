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

    let height = 2550, //assumes your image is 2550px wide
    speed = 60, //pixels per second
    duration = height / speed,
    endPosition = height - (speed / 60); //adjust the end position assuming 60fps
    let moveBackground = TweenMax.to($(".pink-background"), duration, {
      css:{backgroundPosition: '0 -' + endPosition + "px"},
      repeat:-1,
      ease:Linear.easeNone
    });

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

       moveBackground.updateTo({css:{backgroundPosition: '0 -' + endPosition + "px"}}, false);
       moveBackground.timeScale(0.25);

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

       moveBackground.updateTo({css:{backgroundPosition: '0 ' + endPosition + "px"}}, false);
       moveBackground.timeScale(4);
     }
    });

    let $flower1 = $('.flower1');
    let $flower2 = $('.flower2');
    let $flowers = $('.flowers');

    function rotate(x, timespan, degrees){
      let tl = new TimelineMax();
      tl.to(x,  timespan, {rotation:degrees, repeat:-1});
      tl.play();
    }

    rotate($flower1,500000,-3600000);
    rotate($flower2,500000,-3600000);

    function fadeIn(){
      return $('.audio-player').animate({volume: 1}, 500);
    }

    function fadeOut(){
      return $('.audio-player').animate({volume: 0}, 500, function () {
        $('.audio-player').trigger('pause');
     });
    }

    setTimeout(function(){ $(window).resize(); }, 1);

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
