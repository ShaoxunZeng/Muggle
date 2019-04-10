import React, { Component } from "react";
import styles from './index.module.less';
import PropTypes from "prop-types";

const ButtonProps = {
  /** Define type of button */
  type: PropTypes.oneOf(["yellow", "gray"]).isRequired,
};

class Button extends Component {
    render() {
      const { children, type } = this.props;
      const classNames=`${styles["button-all"]} ${styles[`button-type-${type}`]}`;
        return (
            <div className={styles.whole}>
              <button className={classNames}>{children}</button>
            </div>
        )
    }
}

Button.propTypes = ButtonProps;

export default Button;
