import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card, Input, Button, Spin, message } from "antd";
import '../static/css/Login.css';
import { UserOutlined ,KeyOutlined } from '@ant-design/icons';
import servicePath from '../config/apiUrl'
import axios from 'axios'

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const checkLogin = () => {
    setIsLoading(true);
    if(!userName){
      message.error('用户名不能为空')
    }else if(!password){
      message.error('密码不能为空')
    }
    let dataProps={
      'userName':userName,
      'password':password
    }
    axios({
      method:'post',
      url:servicePath.checkLogin,
      data:dataProps,
      withCredentials: true //  允许Cook可以跨域
    }).then(
      res=>{
        setIsLoading(false)
        if(res.data.data=='登录成功')
        {
          localStorage.setItem('openId',res.data.openId)
          props.history.push('/index')
        }else{
          message.error('用户名或者密码错误')
        }
      }
    )
    setTimeout(()=>{
      setIsLoading(false)
  },1000)
  };


  return (
    <div className="login-div">
      <Spin tip="Loading..." spinning={isLoading}>
        <Card
          title="litterWang Blog  System"
          bordered={true}
          style={{ width: 400 }}
        >
          <Input
            id="userName"
            size="large"
            placeholder="Enter your userName"
            prefix={<UserOutlined twoToneColor="rgba(0,0,0,.25)"/>}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <br />
          <br />

          <Input.Password
            id="password"
            size="large"
            placeholder="Enter your password"
            prefix={<KeyOutlined twoToneColor="rgba(0,0,0,.25)"/>}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <Button type="primary" size="large" block onClick={checkLogin}>
            Login in
          </Button>
        </Card>
      </Spin>
    </div>
  );
};

export default Login;
