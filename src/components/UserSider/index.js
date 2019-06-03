import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import styles from './index.module.less';

class UserSider extends Component {
    render() {
        return (
            <div className={styles.whole}>
                <div className={styles.items}>
                    <nav className={styles.nav}>
                        <NavLink
                            className={styles["nav-item"]}
                            to={"/home/order"}
                            activeClassName={styles["nav-active"]}
                        >
                            <div className={styles['vertical-line']}/>
                            <div className={styles.text}>
                                我的订单
                            </div>
                        </NavLink>
                        <NavLink
                            className={styles["nav-item"]}
                            to={"/home/coupon"}
                            activeClassName={styles["nav-active"]}
                        >
                            <div className={styles['vertical-line']}/>
                            <div className={styles.text}>
                                我的优惠券
                            </div>
                        </NavLink>
                        <NavLink
                            className={styles["nav-item"]}
                            to={"/home/membercenter"}
                            activeClassName={styles["nav-active"]}
                        >
                            <div className={styles['vertical-line']}/>
                            <div className={styles.text}>
                                会员中心
                            </div>
                        </NavLink>
                        <NavLink
                            className={styles["nav-item"]}
                            to={"/home/mark"}
                            activeClassName={styles["nav-active"]}
                        >
                            <div className={styles['vertical-line']}/>
                            <div className={styles.text}>
                                想看列表
                            </div>
                        </NavLink>
                        <NavLink
                            className={styles["nav-item"]}
                            to={"/home/message"}
                            activeClassName={styles["nav-active"]}
                        >
                            <div className={styles['vertical-line']}/>
                            <div className={styles.text}>
                                消息通知
                            </div>
                        </NavLink>
                        <NavLink
                            className={styles["nav-item"]}
                            exact// 加一个exact关键字防止主页下面的白条一直都是active
                            to={"/home/setting"}
                            activeClassName={styles["nav-active"]}
                        >
                            <div className={styles['vertical-line']}/>
                            <div className={styles.text}>
                                账户设置
                            </div>
                        </NavLink>
                    </nav>
                </div>
            </div>
        )
    }
}

export default withRouter(UserSider)
