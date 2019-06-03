import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";


class Order extends PureComponent {
    render() {
        return (
            <div className={styles.whole}>
                Order
            </div>
        )
    }
}

export default WithHeaderFooterSider(Order)

