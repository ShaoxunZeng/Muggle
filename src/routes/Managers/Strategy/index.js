import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";

class Strategy extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Strategy
        </div>
    )
  };
}

export default WithSider(Strategy);
