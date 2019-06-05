import React, { Component } from "react";
import styles from './index.module.less';

class Tag extends Component {
  render() {
    const { children, type, onClick } = this.props;
    const classNames=`${styles["tag-all"]} ${styles[`tag-type-${type}`]}`;
    return (
        <div className={styles.whole} onClick={onClick}>
          <button className={classNames}>{children}</button>
        </div>
    )
  }
}

export default Tag;
