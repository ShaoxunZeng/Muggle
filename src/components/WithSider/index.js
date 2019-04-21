import React, { Component } from "react";
import styles from './index.module.less';
import Sider from "../Sider";

export default function WithSider (WrappedComponent) {
  return class extends Component {
    render() {
      const { ...passThroughProps } = this.props;
      return (
          <div className={styles.wholeBody}>
            <div className={styles.sider}>
              <Sider/>
            </div>
            <div className={styles.bodyContent}>
              <WrappedComponent {...passThroughProps} />
            </div>
          </div>
      )
    }
  }
}
