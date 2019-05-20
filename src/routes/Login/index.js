import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import ImageBoard from "../../components/ImageBoard";
import RecentMoives from "../../components/RecentMovies";
import Button from "../../components/Button";
import WithHeaderFooter from "../../components/WithHeaderFooter";
import {NavLink} from "react-router-dom";

class Login extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Login
          <NavLink to='/'> 登陆 </NavLink>
          <NavLink to='/manage'> 管理员身份登录 </NavLink>
        </div>
    )
  };
}

export default Login;