import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooterSider from "../../../../components/WithHeaderFooterSider";



class MemberCenter extends  PureComponent{
    render() {
        return(
            <div className={styles.whole}>
                MemberCenter
            </div>
        )
    }
}

export default WithHeaderFooterSider(MemberCenter)

