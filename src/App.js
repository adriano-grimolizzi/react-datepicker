import './App.css'
import React from 'react'
import Welcome from './components/Welcome'
import FilterableProductTable from './components/product-table/FilterableProductTable'

const App = () =>
  <div className="App">
    <header className="App-header">
      <Welcome name="Adriano" />
      <FilterableProductTable />

    </header>
  </div>

export default App
