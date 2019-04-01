import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from './index.module.less';

class Footer extends Component {
    render() {
        return (
            <div className={styles.whole}>
                <div className={styles.content}>
                    <div className={styles.up}>
                        MUGGLE  CINEME 页脚
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Footer);
