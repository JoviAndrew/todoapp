import React, { Component } from 'react'
import './App.css'
import Title from './components/Title'
import Content from './components/Content'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Title name='To do list App' />
        <hr />
        <Content />
      </React.Fragment>
    )
  }
}

export default App
