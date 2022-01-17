import React, { Component } from'react';
import PublicHeader from '@/components/header/header'

class Balance extends Component {

  render() {
    return (
      <main className="balance-container">
        <PublicHeader title="提现" record></PublicHeader>
      </main>
    )
  }
}

export default Balance