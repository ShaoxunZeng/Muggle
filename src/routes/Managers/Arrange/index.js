import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";

class Arrange extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Arrange
        </div>
    )
  };
}

export default WithSider(Arrange);
