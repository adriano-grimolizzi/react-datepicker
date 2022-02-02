import './App.css'
import React from 'react'
import Welcome from './components/Welcome'
import { Counter } from './feature/counter/counter'

const App = () =>
  <div className="App">
    <header className="App-header">
      <Welcome name="Adriano" />
      <Counter />
    </header>
  </div>

export default App;
