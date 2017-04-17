import React, { Component } from 'react';
import Audio from './audio';
import Background from './background';
import SpecialCats from './special';
import Flowers from './flower';
import BandText from './bandText'

export default class App extends Component {

  render() {
    return (
      <div className="app-view">
        <Background />
        <BandText />
        <SpecialCats />
        <Audio />
        <Flowers />
      </div>
    );
  }
}
