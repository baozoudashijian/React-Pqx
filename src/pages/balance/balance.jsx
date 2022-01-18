import React, {Component} from 'react';
import PublicHeader from '@/components/header/header'
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

  handleInput = () => {

  }

  render() {
    return (
      <main className="balance-container">
        <PublicHeader title="提现" record></PublicHeader>
        <section className="balance-main-content">
          <p className="balance-header">您的可提现金额为：¥ {this.state.balance.balance} </p>
          <form className="balance-form">
            <p>请输入体现金额（元）</p>
            <p>¥ <input type="text" value={this.state.applyNum} placeholder="0.00" onInput={this.handleInput} maxLength="5"/></p>
          </form>
        </section>
      </main>
    )
  }
}

export default Balance