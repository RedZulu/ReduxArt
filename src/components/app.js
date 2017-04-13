import React, { Component } from 'react';
import Audio from './audio';
import Cover from './cover';
import Background from './background';
import SpecialCats from './special';

export default class App extends Component {

  render() {
    return (
      <div className="app-view">
        <Background />
        <SpecialCats />
        <Audio />
      </div>
    );
  }
}
