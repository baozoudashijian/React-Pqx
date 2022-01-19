import React, {Component} from 'react';
import PublicHeader from '@/components/header/header'
import TouchableOpacity from '@/components/TouchableOpacity/TouchableOpacity'
import Alert from '@/components/alert/alert'
import PropTypes from 'prop-types';
import './home.scss'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import { saveFormData, saveImg, clearData } from '@/store/home/action';
import { clearSelected } from '@/store/production/action';

class Home extends Component {

  static propTypes = {
    formData: PropTypes.object.isRequired,
    saveFormData: PropTypes.func.isRequired,
    saveImg: PropTypes.func.isRequired,
    clearData: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
  }

  state = {
    alertStatus: false,
    alertTip: ''
  }

  /**
   * 已选择的商品数据
   * @type {Array}
   */
  selectedProductList = [];


  handleInput = () => {

  }
  // 上传图片
  uploadImg = () => {

  }
  // 提交表单
  sumitForm = () => {

  }
  // 关闭弹框
  closeAlert = () => {

  }

  render() {
    return (
      <main className="home-container">
        <PublicHeader title="首页" record></PublicHeader>
        <p className="common-title">请输入你的信息</p>
        <form className="home-form">
          <div className="home-form-item">
            <span>销售金额：</span>
            <input type="text" placeholder="请输入订单金额"
                   value={this.props.formData.orderSum}
                   onChange={this.handleInput.bind(this, 'orderSum')}/>
          </div>
          <div className="home-form-item">
            <span>客户姓名：</span>
            <input type="text" placeholder="请输入客户姓名" value={this.props.formData.name}
                   onChange={this.handleInput.bind(this, 'name')}/>
          </div>
          <div className="home-form-item">
            <span>客户电话：</span>
            <input type="text" maxLength="13" placeholder="请输入客户电话" value={this.props.formData.phoneNo}
                   onChange={this.handleInput.bind(this, 'phoneNo')}/>
          </div>
        </form>
        <div>
          <p className="common-title">请选择销售的产品</p>
          <Link to="/production" className="common-select-btn">
            {
              this.selectedProductList.length ? <ul className="selected-pro-list">
                {
                  this.selectedProductList.map((item, index) => {
                    return <li key={index}
                               className="selected-pro-item ellipsis">{item.product_name}x{item.selectNum}</li>
                  })
                }
              </ul> : '选择产品'
            }
          </Link>
        </div>
        <div className="upload-img-con">
          <p className="common-title">请上传发票凭证</p>
          <div className="file-label">
            <span className="common-select-btn">上传图片</span>
            <input type="file" onChange={this.uploadImg}/>
          </div>
          <img src={this.props.formData.imgpath} className="select-img" alt=""/>
        </div>
        <TouchableOpacity className="submit-btn" clickCallBack={this.sumitForm} text="提交"/>
        <Alert closeAlert={this.closeAlert} alertTip={this.state.alertTip} alertStatus={this.state.alertStatus}/>
      </main>
    )
  }
}

export default connect(state => ({
  formData: state.formData
}), {
  saveFormData,
  saveImg,
  clearData,
  clearSelected,
})(Home)
