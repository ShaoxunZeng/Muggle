import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from './index.module.less';
import UserAvatar from '../Avatar';

class Sider extends Component {
    render() {
        return (
            <div className={styles.whole}>
            </div>
        )
    }
}

export default withRouter(Sider);
