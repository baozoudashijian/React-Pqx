import React, {Component} from 'react';
import PublicHeader from '@/components/header/header'
import TouchableOpacity from '@/components/TouchableOpacity/TouchableOpacity'
import Alert from '@/components/alert/alert'
import PropTypes from 'prop-types';
import './home.scss'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {saveFormData, saveImg, clearData} from '@/store/home/action';
import {clearSelected} from '@/store/production/action';
import API from '@/api/api'
import envconfig from "../../envconfig/envconfig";

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
  selectedProList = [];

  /**
   * 将表单数据保存至redux，保留状态
   * @param  {string} type  数据类型 orderSum||name||phoneNo
   * @param  {object} event 事件对象
   */
  handleInput = (type, event) => {
    let value = event.target.value;
    switch (type) {
      case 'orderSum':
        value = value.replace(/\D/g, '')
        break;
      case 'name':
        break;
      case 'photoNo':
        break;
    }
    this.props.saveFormData(value, type)
  }
  // 上传图片
  uploadImg = async (event) => {
    try {
      let formdata = new FormData()
      formdata.append('file', event.target.files[0])
      let result = await API.uploadImg({data: formdata})
      this.props.saveImg(envconfig.imgUrl + result.image_path)
    } catch (e) {
      console.error(e)
    }
  }
  // 提交表单
  sumitForm = () => {
    const {orderSum, name, phoneNo} = this.props.formData
    let alertTip = ''
    if (!orderSum.toString().length) {
      alertTip = "请填写金额"
    } else if (!name.toString().length) {
      alertTip = "请填写姓名"
    } else if (!phoneNo.toString().length) {
      alertTip = '请填写正确的手机号';
    } else {
      alertTip = '添加数据成功';
      this.props.clearSelected();
      this.props.clearData();
    }
    this.setState({
      alertStatus: true,
      alertTip
    })
  }
  // 关闭弹框
  closeAlert = () => {
    this.setState({
      alertStatus: false
    })
  }
  // 初始化数据
  initData = props => {
    this.selectedProList = []
    props.proData.dataList.forEach(item => {
      if (item.selectStatus && item.selectNum) {
        this.selectedProList.push(item)
      }
    })
  }


  componentWillReceiveProps(nextProps, nextContext) {
    console.log(nextProps.formData, 'formData')
  }

  componentWillMount() {
    this.initData(this.props)
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
              this.selectedProList.length ? <ul className="selected-pro-list">
                {
                  this.selectedProList.map((item, index) => {
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
            <input className="file" type="file" onChange={this.uploadImg}/>
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
  formData: state.formData,
  proData: state.proData
}), {
  saveFormData,
  saveImg,
  clearData,
  clearSelected,
})(Home)
