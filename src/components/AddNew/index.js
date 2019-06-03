import React, { Component } from "react";
import styles from './index.module.less';
import PropTypes from "prop-types";

class AddNew extends Component {
    render() {
      const { children, type, onClick } = this.props;
      const classNames=`${styles["button-all"]} ${styles[`button-type-${type}`]}`;
        return (
            <div className={styles.whole}>
              <button className={classNames} onClick={onClick}>{children}</button>
            </div>
        )
    }
}

export default AddNew;
