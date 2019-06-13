import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";
import styles from './index.module.less';

class Footer extends Component {
    render() {
        return (
            <div className={styles.whole}>
                <div className={styles.content}>
                    <div className={styles.up}>
                        <img
                            src={'https://cdn.nlark.com/yuque/0/2019/png/248245/1559139789103-98db7385-6320-4f72-a2b2-daae85080a83.png'}/>
                        <div style={{marginLeft: 20}}>
                            <p >@MuggleCinema</p>
                            <p>SE II   PROJECT</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Footer);
