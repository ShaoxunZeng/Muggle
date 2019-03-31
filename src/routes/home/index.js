import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";

class Index extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Home
        </div>
    )
  };
}

export default Index;