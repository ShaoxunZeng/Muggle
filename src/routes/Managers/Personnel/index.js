import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";

class Personnel extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Personnel
        </div>
    )
  };
}

export default WithSider(Personnel);
