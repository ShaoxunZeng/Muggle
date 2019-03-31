import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from './index.module.less';

class Header extends Component {
    render() {
        return (
            <div className={styles.whole}>
                <div className={styles.content}>
                    <div className={styles.up}>
                        MUGGLE  CINEME
                    </div>
                    <div className={styles.down}>
                        <nav className={styles.nav}>
                            <NavLink
                                className={styles["nav-item"]}
                                exact
                                to={"/"}
                                activeClassName={styles["nav-active"]}
                            >
                                主  页
                                <div className={styles.underline} />
                            </NavLink>
                            <NavLink
                                className={styles["nav-item"]}
                                to={"/all"}
                                activeClassName={styles["nav-active"]}
                            >
                                全部影片
                                <div className={styles.underline} />
                            </NavLink>
                            <NavLink
                                className={styles["nav-item"]}
                                to={"/discount"}
                                activeClassName={styles["nav-active"]}
                            >
                                优  惠
                                <div className={styles.underline} />
                            </NavLink>
                            <NavLink
                                className={styles["nav-item"]}
                                to={"/privateCinema"}
                                activeClassName={styles["nav-active"]}
                            >
                                私人影院
                                <div className={styles.underline} />
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);
