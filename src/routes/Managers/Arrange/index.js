import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";
import {DatePicker, Icon, Input, Tooltip} from "antd";

class Arrange extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Arrange
          <Input
              placeholder="Search Movies"
              prefix={<Icon type="user" style={{ color: 'rgb(255,235,158)', }} />}
          />
          <DatePicker className={styles.datepicker}/>
        </div>
    )
  };
}

export default WithSider(Arrange);
