import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";

class Halls extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Halls
        </div>
    )
  };
}

export default WithSider(Halls);
