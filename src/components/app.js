import React, { Component } from 'react';
import Audio from './audio';
import Cover from './cover'

export default class App extends Component {

  componentDidMount() {
    //plugin
    const DrawEye = function(eyecontainer, eyepupil, speed, interval){
      let mouseX = 0, mouseY = 0, xp = 0, yp = 0;
      let limitX = $(eyecontainer).width() - $(eyepupil).width(),
          limitY = $(eyecontainer).height() - $(eyepupil).height(),
          offset = $(eyecontainer).offset();
          console.log($(eyecontainer).offset());

      $(window).mousemove(function(e){
        mouseX = Math.min(e.pageX - offset.left, limitX);
        mouseY = Math.min(e.pageY - offset.top, limitY);
        if (mouseX < 0) mouseX = 0;
        if (mouseY < 0) mouseY = 0;
      });

      let follower = $(eyepupil);
      let loop = setInterval(function(){
        xp += (mouseX - xp) / speed;
        yp += (mouseY - yp) / speed;
        follower.css({left:xp, top:yp});
      }, interval);
    };

    //create eyes
    let eye1 = new DrawEye("#left-eye",  "#left-pupil", 8, 30);
    let eye2 = new DrawEye("#right-eye", "#right-pupil", 8, 30);
  }


  render() {
    return (
      <div>
        <Audio />
        <Cover />
      </div>
    );
  }
}
