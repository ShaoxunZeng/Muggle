import React, {Component} from "react";
import styles from './index.module.less';
import {Form, Input, Icon} from 'antd'
import Button from "../Button";
import {withRouter} from "react-router-dom";
import {register} from "../../services/apiLoginAndRegister";


class RegisterInput extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const {username, password} = values;
        register({username, password}).then((res) => {
          if (res.succ) {
            alert("注册成功，请登录");
            window.location.href = '/login';
          } else {
            alert(res.msg);
          }
        });
      }
    })
  };

  render() {
    const {form} = this.props;
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
            <Button type={'yellow'} htmlType="submit">用户注册</Button>
          </Form.Item>
        </Form>
    );
  }

}

export default withRouter(Form.create()(RegisterInput));
