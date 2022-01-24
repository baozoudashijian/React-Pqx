import React, {Component} from 'react';
import PublicHeader from '@/components/header/header'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getProData, togSelectPro, editPro } from '@/store/production/action';

class Production extends Component {

  static propTypes = {
    proData: PropTypes.object.isRequired,
    getProData: PropTypes.func.isRequired,
    togSelectPro: PropTypes.func.isRequired,
    editPro: PropTypes.func.isRequired
  }

  componentDidMount() {
    if (!this.props.proData.dataList.length) {
      this.props.getProData()
    }
  }

  render() {
    return (
      <main className="common-con-top">
        <PublicHeader title="首页" confirm/>
        <section className="pro-list-con">
          <ul className="pro-list-ul">

          </ul>
        </section>
      </main>
    )
  }
}

export default connect(state => ({
  proData: state.proData
}), {
  getProData,
  togSelectPro,
  editPro
})(Production)