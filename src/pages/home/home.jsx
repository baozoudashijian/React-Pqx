import React, { Component } from 'react';
import PublicHeader from '@/components/header/header'
import './home.scss'

class Home extends Component {

  render() {
    return (
      <main className="home-container">
        <PublicHeader title="首页" record></PublicHeader>
      </main>
    )
  }
}

export default Home
