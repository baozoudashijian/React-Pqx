import React, {Component} from 'react';
import PublicHeader from '@/components/header/header'
import './helpcenter.scss'

class Helpcenter extends Component {

  render() {
    return (
      <main>
        <PublicHeader title="帮助中心" record></PublicHeader>
        <article className="context-con">
          <h2>介绍</h2>
          <p>本项目主要用于理解 react 和 redux 的编译方式，以及 react + redux 之间的配合方式</p>
          <h2>技术要点</h2>
          <p>react：v17.0.2</p>
          <p>redux：v4.1.2</p>
          <p>webpack：v5.64.4</p>
          <p>react-router：v4.2.2</p>
          <p>axios：v0.24.0</p>
          <p>sass：v7.0.1</p>
          <p>immutable：v3.8</p>
          <p>ES 6/7/8</p>
          <p>code split</p>
          <p>hot loader</p>
          <p>项目地址 <a href="https://github.com/baozoudashijian/React-Pqx">github</a></p>
        </article>
      </main>
    )
  }
}

export default Helpcenter