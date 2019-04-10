import React, { Component } from "react";
import styles from './index.module.less';
import PropTypes from "prop-types";
import {Avatar , Badge} from "antd";
import { NavLink, withRouter } from "react-router-dom";

const UserAvatarProps = {
  /** Define src of avatar */
  src: PropTypes.string.isRequired,
};

class UserAvatar extends Component {
    render() {
      const { src } = this.props;
        return (
            <div className={styles.whole}>
              <NavLink to={"/login"}>
                <Badge count={4} style={{ backgroundColor: 'rgb(255,218,23)', color: 'rgba(39,39,41,0.65)' }}>
                  <Avatar shape='circle' src={src} className={styles.avatar} />
                </Badge>
              </NavLink>
            </div>
        )
    }
}

UserAvatar.propTypes = UserAvatarProps;

export default withRouter(UserAvatar);
