import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";

class Onshelf extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Onshelf
        </div>
    )
  };
}

export default WithSider(Onshelf);
