import React, {Component} from "react";
import styles from './index.module.less';
import PropTypes from "prop-types";
import {Popover} from "antd";

class AddNew extends Component {
  render() {
    return (
        <Popover content={"新增排片"}>
          <div className={styles.whole}>
            <div className={styles.vertical}/>
            <div className={styles.horizon}/>
          </div>
        </Popover>
    )
  }
}

export default AddNew;
