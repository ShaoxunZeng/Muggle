import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";

class Activity extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Activity
        </div>
    )
  };
}

export default WithSider(Activity);
