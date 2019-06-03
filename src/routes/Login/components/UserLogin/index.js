import {login} from "../../../../services/apiLogin.js"
import React, {Component} from 'react'
import Button from "../../../../components/Button";
import {withRouter} from 'react-router-dom';
import LoginInput from "../../../../components/LoginInput";


class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleUserLoginButtonClick() {
        //todo() 实现用户登陆后跳转回上一个浏览的界面 调用登陆接口
        console.log(this.state.username)
        console.log(this.state.password)
        this.props.history.push('/home/order')
    };


    render() {
        return (
            <div>

                <LoginInput/>
                <Button type={'yellow'} onClick={() => this.handleUserLoginButtonClick()}>用户登陆</Button>

            </div>
        )
    }
}

export default withRouter(UserLogin)
