import React from 'react'
import Nav from './components/nav.jsx'
import Card from './components/card.jsx'
import './App.css'

function App() {

  return (
    <>
      <Nav />
      <div className="cards">
        <Card title="Title 1"/>
        <Card title="Title 2"/>
        <Card title="Title 3"/>
        <Card title="Title 4"/>
      </div>
      
    </>
  )
}

export default App
