import React, {Component} from 'react';
import './recordList.scss'
import API from '../../../api/api'

class RecordList extends Component {

  state = {
    recordData: []
  }

  getRecord = async type => {
    try {
      let result = await API.getRecord({type})
      this.setState({recordData: result.data || []})
    } catch (e) {
      console.error(e)
    }
  }

  componentWillReceiveProps(nextProps){
    // 属性变化时设置头部底部标签位置
    let currenType = this.props.location.pathname.split('/')[2];
    let type = nextProps.location.pathname.split('/')[2];
    if(currenType !== type){
      this.getRecord(type);
    }
  }

  componentWillMount() {
    let type = this.props.location.pathname.split('/')[2];
    this.getRecord(type)
  }

  render() {
    return (
      <div>
        <ul className="record-list-con">
          {
            this.state.recordData.map((item, index) => {
              return <li className="record-item" key={index}>
                <section className="record-item-header">
                  <span>创建时间：{item.create_at}</span>
                  <span>{item.type_name}</span>
                </section>
                <section className="record-item-content">
                  <p><span>用户名： <span>{item.customers_name} &emsp; {item.customers_phone}</span></span></p>
                  <p><span>商&emsp;品：</span>{item.product[0].product_name}</p>
                  <p><span>金&emsp;额：</span>{item.sales_money} &emsp; 佣金：{item.commission}</p>
                </section>
                <p className="record-item-footer">等待管理员审核，审核通过后，佣金将结算至账户</p>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default RecordList