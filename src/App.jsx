import { useState } from 'react'
import { Header } from './components/Header'
import { Cover } from './components/Cover'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
// import './App.css'

function App() {

  return (
    <div className="App">
      <Header/>
      <Cover/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
