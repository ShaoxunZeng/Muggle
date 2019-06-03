import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";

class Setting extends  PureComponent{
    render() {
        return(
            <div className={styles.whole}>
                Setting
            </div>
        )
    }
}

export default WithHeaderFooterSider(Setting)
