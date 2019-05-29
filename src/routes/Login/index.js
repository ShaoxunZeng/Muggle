import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import LoginBackground from "../../components/LoginBackground";

class Login extends PureComponent {
    render() {
        return (
            <div >

                <AdminLogin/>
                <UserLogin/>
                <UserRegister/>

                <NavLink to='/'> 登陆 </NavLink>
                <NavLink to='/manage'> 管理员身份登录 </NavLink>
            </div>
        )
    };
}

export default LoginBackground(Login);
