import React, {Component} from 'react';
import PublicHeader from '@/components/header/header'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getProData, togSelectPro, editPro} from '@/store/production/action';
import './production.scss'

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

  togSelect = (index) => {
    this.props.togSelectPro(index)
  }
  /**
   * 添加或删减商品，交由redux进行数据处理，作为全局变量
   * @param  {int} index 编辑的商品索引
   * @param  {int} num   添加||删减的商品数量
   */
  handleEdit = (index, num) => {
    console.log(index, '=> index');
    let currentNum = this.props.proData.dataList[index].selectNum + num
    if (currentNum < 0) {
      return
    }
    this.props.editPro(index, currentNum)
  }

  render() {
    return (
      <main className="common-con-top">
        <PublicHeader title="首页" confirm/>
        <section className="pro-list-con">
          <ul className="pro-list-ul">
            {
              this.props.proData.dataList.map((item, index) => {
                return <li className="pro-item" key={index}>
                  <div className="pro-item-select" onClick={this.togSelect.bind(this, index)}>
                    <span
                      className={`icon-xuanze1 pro-select-status ${item.selectStatus ? 'pro-selected' : ''}`}></span>
                    <span className="pro-name">{item.product_name}</span>
                  </div>
                  <div className="pro-item-edit">
                    <span className={`icon-jian ${item.selectNum > 0 ? 'edit-active' : ''}`}
                          onClick={this.handleEdit.bind(this, index, -1)}></span>
                    <span className="pro-num">{item.selectNum}</span>
                    <span className={`icon-jia`} onClick={this.handleEdit.bind(this, index, 1)}></span>
                  </div>
                </li>
              })
            }
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