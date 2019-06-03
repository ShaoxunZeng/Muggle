import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";

class Coupon extends  PureComponent{
    render() {
        return(
            <div className={styles.whole}>
                Coupon
            </div>
        )
    }
}

export default WithHeaderFooterSider(Coupon)


