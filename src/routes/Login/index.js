import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import LoginBackground from "../../components/LoginBackground";
import {Radio} from 'antd'

class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            showAdmin: false,
            toRegister: false
        }
    }

    handleStatusChange = () => {
        this.setState({
            toRegister: !this.state.toRegister
        })
    };
    handleAdminChange = () => {
        this.setState({
            showAdmin: !this.state.showAdmin
        })
    };

    render() {
        return (
            <div className={styles.wrapper}>

                {this.state.showAdmin ? <AdminLogin/> :
                    <div>
                        <Radio.Group onChange={this.handleStatusChange.bind(this)} defaultValue="signIn">
                            <Radio.Button
                                style={{background: '#FFF9C6', borderBottomLeftRadius: 10, borderTopLeftRadius: 10,}}
                                value="signIn">Sign In</Radio.Button>
                            <Radio.Button
                                style={{background: '#414142', borderBottomRightRadius: 10, borderTopRightRadius: 10}}
                                value="signUp">Sign Up</Radio.Button>
                        </Radio.Group>
                        {this.state.toRegister ? <UserRegister/> : <UserLogin/>}

                    </div>
                }

                <NavLink to='/'> 登陆 </NavLink>
                <NavLink onClick={this.handleAdminChange.bind(this)}> 管理员身份登录 </NavLink>
            </div>
        )
    };
}

export default LoginBackground(Login);
