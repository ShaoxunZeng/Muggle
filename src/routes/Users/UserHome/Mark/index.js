import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";

class Mark extends PureComponent {
    render() {
        return (
            <div className={styles.whole}>
                Mark
            </div>
        )
    }
}

export default WithHeaderFooterSider(Mark)

