import './App.css'
import React, { Component } from 'react'

import DatePickerComponent from './datepicker/Datepicker'
import Container from './datepicker/lift-state/Container'
import Welcome from './components/Welcome'
import Clock from './components/clock/Clock';
import Toggle from './components/Toggle';
import Calculator from './components/lifting-state-up/boiling-water/Calculator';

const App = () =>
  <div className="App">
    <header className="App-header">
      <Welcome name="Adriano" />
      <Clock />
      {/* <Toggle /> */}
      {/* <DatePickerComponent /> */}
      <Container />
      {/* <Calculator /> */}
    </header>
  </div>

export default App;
