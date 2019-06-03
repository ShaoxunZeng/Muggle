import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";


class Message extends  PureComponent{
    render() {
        return(
            <div className={styles.whole}>
                Message
            </div>
        )
    }
}

export default WithHeaderFooterSider(Message)

