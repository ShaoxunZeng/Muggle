import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";

class Statistic extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Statistic
        </div>
    )
  };
}

export default WithSider(Statistic);
