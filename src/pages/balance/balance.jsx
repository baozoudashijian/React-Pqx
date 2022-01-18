import React, {Component} from 'react';
import PublicHeader from '@/components/header/header'
import TouchableOpacity from '@/components/TouchableOpacity/TouchableOpacity'
import API from '@/api/api'
import './balance.scss'

class Balance extends Component {

  state = {
    applyNum: '', // 输入值
    alertStatus: false, // 弹框状态
    alertTip: '', // 弹框提示文字
    balance: { // 可提现金额
      balance: 0
    }
  }
  // 初始化数据
  initData = async () => {
    try {
      let result = await API.getBalance();
      this.setState({
        balance: result
      })
    } catch (err) {
      console.log(err)
    }
  }
  /**
   * 格式化输入数据
   * 格式为微信红包格式：最大 200.00
   * @param  {object} event 事件对象
   */
  handleInput = event => {
    let value = event.target.value;
    if ((/^\d*?\.?\d{0,2}?$/gi).test(value)) {
      if ((/^0+[1-9]+/).test(value)) {
        value = value.replace(/^0+/, '');
      }
      if ((/^0{2}\./).test(value)) {
        value = value.replace(/^0+/, '0');
      }
      value = value.replace(/^\./gi, '0.');
      if (parseFloat(value) > 200) {
        value = '200.00';
      }
      this.setState({applyNum: value});
    }
  }
  /**
   * 提交判断条件
   */
  submitForm = () => {
    let alertTip;
    if (!this.state.applyNum) {
      alertTip = "请输入提现金额"
    } else if (parseFloat(this.state.applyNum) > this.state.balance.balance) {
      alertTip = '申请提现金额不能大于余额'
    } else {
      alertTip = '申请提现成功'
    }
    this.setState({
      alertStatus: true,
      alertTip,
      applyNum: ''
    })

  }

  componentDidMount() {
    this.initData()
  }

  render() {
    return (
      <main className="balance-container">
        <PublicHeader title="提现" record></PublicHeader>
        <section className="balance-main-content">
          <p className="balance-header">您的可提现金额为：¥ {this.state.balance.balance} </p>
          <form className="balance-form">
            <p>请输入体现金额（元）</p>
            <p>¥ <input type="text" value={this.state.applyNum} placeholder="0.00" onInput={this.handleInput}
                        maxLength="5"/></p>
          </form>
          <TouchableOpacity className='submit-btn' text="申请提现" clickCallBack={this.submitForm}></TouchableOpacity>
        </section>
      </main>
    )
  }
}

export default Balance