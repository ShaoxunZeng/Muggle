import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";

class Member extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Member
        </div>
    )
  };
}

export default WithSider(Member);
