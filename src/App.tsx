import React, { Component } from 'react'
import styled from 'styled-components';
import './App.css'
import Home from './pages/Home/Home.page'

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  margin-top: 60px;
  max-width: 680px;
  margin-bottom: 80px;
  overflow: auto;
  min-height: calc(100% - 160px);
  flex-direction: column;
`;

class App extends Component {
  render() {
    return <AppWrapper><Home /></AppWrapper>
  }
}

export default App
