import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";

class Movies extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Movies
        </div>
    )
  };
}

export default WithSider(Movies);
