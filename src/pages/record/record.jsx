import React, {Component} from 'react';
import PublicHeader from '@/components/header/header'
import {NavLink} from 'react-router-dom'
import './record.scss'

class Record extends Component {

  state = {
    flagBarPos: '17%'
  }
  /**
   * 设置头部底部标签位置
   * @param  {string} type 数据类型
   */
  setFlagBarPos = type => {
    let flagBarPos;
    switch (type) {
      case 'passed':
        flagBarPos = '17%';
        break;
      case 'audited':
        flagBarPos = '50%';
        break;
      case 'failed':
        flagBarPos = '83%';
        break;
      default:
        flagBarPos = '17%';
    }
    this.setState({flagBarPos})
  }

  componentWillMount() {
    console.log(this.props.location.pathname);
    // 初始化设置头部底部标签位置
    let type = this.props.location.pathname.split('/')[2];
    this.setFlagBarPos(type);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    // 属性变化时设置头部底部标签位置
    let currenType = this.props.location.pathname.split('/')[2];
    let type = nextProps.location.pathname.split('/')[2];
    if (currenType !== type) {
      this.setFlagBarPos(type);
    }
  }

  render() {
    return (
      <main className="record-container">
        <PublicHeader title="记录"></PublicHeader>
        <section className="record-nav-con">
          <nav className="record-nav">
            <NavLink to={`${this.props.match.path}/passed`} className="nav-link">已通过</NavLink>
            <NavLink to={`${this.props.match.path}/audited`} className="nav-link">待审核</NavLink>
            <NavLink to={`${this.props.match.path}/failed`} className="nav-link">未通过</NavLink>
          </nav>
          <i className="nav-flag-bar" style={{left: this.state.flagBarPos}}></i>
        </section>
      </main>
    )
  }
}

export default Record