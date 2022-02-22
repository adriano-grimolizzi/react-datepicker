import './App.css'
import React from 'react'
import Welcome from './components/Welcome'
import FilterableProductTable from './components/product-table-interactive/FilterableProductTable'
import Datepicker from './datepicker/Datepicker'

export default () =>
  <div className="App">
    <header className="App-header">
      <Datepicker />
    </header>
  </div>
