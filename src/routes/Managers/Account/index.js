import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import {NavLink} from "react-router-dom";
import WithSider from "../../../components/WithSider";

class Account extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Account
        </div>
    )
  };
}

export default WithSider(Account);
