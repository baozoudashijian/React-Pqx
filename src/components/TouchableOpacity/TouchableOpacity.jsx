import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TouchableOpacity.scss';

 class TouchableOpacity extends Component {

  static propTypes = {
    clickCallBack: PropTypes.func,
    text: PropTypes.string,
    className: PropTypes.string
  }

  handleTouchStart = () => {
    this.refs.btn.style.opacity = '0.3'
  }
  handleTouchEnd = () => {
    this.refs.btn.style.opacity = '1'
    this.props.clickCallBack()
  }

  render() {
    return (
      <div className={`btn-con ${this.props.className}`}
           onTouchStart={this.handleTouchStart}
           onTouchEnd={this.handleTouchEnd}
           ref='btn'>{this.props.text || '确认'}</div>
    )
  }
}

export default TouchableOpacity