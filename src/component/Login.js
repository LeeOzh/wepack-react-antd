import React, { PureComponent } from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import request from '../network/request'
import '../style/login.less'

class Login extends PureComponent {

    componentDidMount() {
        document.body.style.backgroundImage = 'url(../images/nw.jpg)'
    }

    handleSubmit = e => {
        const { history } = this.props;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
          const { username, password } = values;
          const obj = {
              user:username,
              pwd:password,
          }
          
          request.post("http://localhost:3100/user/login",obj).then(res => {
              if(res.data.code === 200) {
                  localStorage.setItem('token',res.data.token)
                  message.success('登陆成功')
                  history.push('/main')
              }
          })
          
        });
      };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                        />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                        />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                        })(<Checkbox>记住密码</Checkbox>)}
                        <a className="login-form-forgot" href="">
                        忘记密码
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        登陆
                        </Button>
                        <a href="">注册账号</a>
                    </Form.Item>
                </Form>
            </div>
        )
    }
        
} 
const LoginCom = Form.create({ name: 'normal_login' })(Login);

export default LoginCom;