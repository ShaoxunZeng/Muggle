import React, {Component} from "react";
import styles from './index.module.less';
import {Form, Input, Icon} from 'antd'
import Button from "../Button";
import {withRouter} from "react-router-dom";
import {login} from "../../services/apiLoginAndRegister";
import {setAuthorization, setToken} from "../../utils/authorization";


class LoginInput extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const {username, password} = values;
        login({username, password}).then((res) => {
          console.log(res);
          setAuthorization({role: res.role, token: res.token});
          this.props.history.push('/');
        })
      }
    });
    //todo() 实现用户登陆后跳转回上一个浏览的界面 调用登陆接口
    // this.props.history.push('/home/order')
  };

  render() {
    const {form,buttonText} = this.props;
    const {getFieldDecorator} = form;
    return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{required: true, message: 'Please input your username!'}],
            })(
                <Input
                    prefix={<Icon type="user" style={{color: '#FFFFFF'}}/>}
                    placeholder="Username"
                    style={{marginBottom: 20 + 'px'}}
                />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            })(
                <Input
                    prefix={<Icon type="lock" style={{color: '#FFFFFF'}}/>}
                    type="password"
                    placeholder="Password"
                />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type={'yellow'} htmlType="submit">{buttonText}</Button>
          </Form.Item>
        </Form>
    );
  }

}

export default withRouter(Form.create()(LoginInput));
