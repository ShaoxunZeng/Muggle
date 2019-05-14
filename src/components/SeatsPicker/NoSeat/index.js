import React, { Component } from "react";
import styles from './index.module.less';
import { withRouter } from "react-router-dom";

class NoSeat extends Component {
  render() {
    return (
        <div className={styles.whole} />
    )
  }
}

export default NoSeat;
