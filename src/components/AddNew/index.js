import React, {Component} from "react";
import styles from './index.module.less';
import PropTypes from "prop-types";
import {Popover} from "antd";

class AddNew extends Component {
  render() {
    return (
        <div className={styles.whole}>
          <div className={styles.horizon}>
            <div className={styles.vertical}/>
          </div>
        </div>
    )
  }
}

export default AddNew;
