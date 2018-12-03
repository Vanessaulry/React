import React,{Component} from 'react';
import {NavBar,WingBlank, WhiteSpace, List, InputItem, Radio, Button} from 'antd-mobile';

import Logo from '../logo'

class Login extends Component{
  //设置初始状态
  state = {
    username:'',
    password:''
  }

  //更新状态
  handleChange = (type,value) =>{
    this.setState({
        [type]:value
      }
    )
  }

  goregister = () => {
    //点击跳转到注册界面
    this.props.history.replace('./register');
  }

  //点击登录，提交信息
  login = () => {
    const {username, password} = this.state;
    //发送ajax请求
    console.log(username, password);
  }
  render(){
    return(
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
          <List>
            <InputItem onChange={val => this.handleChange('username',val)}>用户名  :</InputItem>
            <WhiteSpace />
            <InputItem onChange={val => this.handleChange('password',val)}>密&nbsp;&nbsp;&nbsp;码  :</InputItem>
            <WhiteSpace />
            <Button type="primary" onClick={this.login}>登录</Button>
            <WhiteSpace />
            <Button onClick={this.goregister}>还没有账户</Button>
            <WhiteSpace />
          </List>
        </WingBlank>
      </div>
      )
  }
}

export default Login;