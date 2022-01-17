import React, {Component} from 'react';
import './header.scss'
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class PublicHeader extends Component {

  static propTypes = {
    record: PropTypes.any,
    title: PropTypes.string.isRequired
  }

  state = {
    navState: false
  }

  toggleNav = () => {
    console.log(1123)
    this.setState({
      navState: !this.state.navState
    })
  }

  FirstChild = props => {
    const childrenArray = React.Children.toArray(props.children)
    return childrenArray[0] || null
  }

  render() {
    return (
      <header className="header-container">
        <span className="header-slide-icon icon-catalog " onClick={this.toggleNav}></span>
        <span className="header-title">{this.props.title}</span>
        {
          this.props.record && <NavLink to="/record" exact className="header-link icon-jilu"></NavLink>
        }
        <ReactCSSTransitionGroup
          component={this.FirstChild}
          transitionName="nav"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {
            this.state.navState && <aside key="nav-slide" className="nav-slide-list" >
              <NavLink to="/" exact className="nav-link icon-jiantou-copy-copy">首页</NavLink>
              <NavLink to="/balance" exact className="nav-link icon-jiantou-copy-copy">提现</NavLink>
              <NavLink to="/helpcenter" exact className="nav-link icon-jiantou-copy-copy">帮助中心</NavLink>
            </aside>
          }
        </ReactCSSTransitionGroup>
      </header>
    )
  }
}

export default PublicHeader
