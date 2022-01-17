import React, { Component } from'react';
import PublicHeader from '@/components/header/header'

class Helpcenter extends Component {

  render() {
    return (
      <main className="helpcenter-container">
        <PublicHeader title="帮助中心" record></PublicHeader>
      </main>
    )
  }
}

export default Helpcenter