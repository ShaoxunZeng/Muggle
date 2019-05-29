import {login} from "../../../../services/apiLogin.js"
import React, {Component} from 'react'
import styles from "../../index.module.less";
import Button from "../../../../components/Button";
import {withRouter} from 'react-router-dom';
import LoginInput from "../../../../components/LoginInput";


class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleAdminLoginButtonClick() {
        this.props.history.push('/manage')
    }

    render() {
        return (
            <div>
                AdminLogin
                <LoginInput />
                <Button type={'yellow'} onClick={() => this.handleAdminLoginButtonClick()}>管理员登陆</Button>
            </div>
        )
    }
}

export default withRouter(AdminLogin)
