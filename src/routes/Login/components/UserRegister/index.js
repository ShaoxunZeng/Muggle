import {register} from '../../../../services/apiLogin.js'
import React, {Component} from 'react'
import Button from "../../../../components/Button";
import {withRouter} from 'react-router-dom';
import LoginInput from "../../../../components/LoginInput";

class UserRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    handleUserRegisterButtonClick() {
        //todo() 实现用户登陆后跳转回上一个浏览的界面
        console.log(this.state.username)
        console.log(this.state.password)
        // this.props.history.push('/')
    };


    render() {
        return (
            <div>
                UserRegister
                <LoginInput/>
                <Button type={'yellow'} onClick={() => this.handleUserRegisterButtonClick()}>用户注册</Button>
            </div>
        )
    }
}
export default UserRegister
