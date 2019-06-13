import React, {Component} from "react";
import styles from './index.module.less';
import PropTypes from "prop-types";
import {Avatar, Badge} from "antd";
import {NavLink, withRouter} from "react-router-dom";
import {judgeLogin} from "../../utils/authorization";
import {getNewMsgNum} from "../../services/apiMessage";

const UserAvatarProps = {
    /** Define src of avatar */
    src: PropTypes.string.isRequired,
};

class UserAvatar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newMsgNum: 0
        }
    }

    componentWillMount() {
        if (judgeLogin()) {
            getNewMsgNum().then(res => {
                console.log(res.unreadNum);
                this.setState({
                    newMsgNum: Number(res.unreadNum)
                })
            })
        }
    }

    render() {
        const {src} = this.props;
        return (
            <div className={styles.whole}>
                <NavLink to={judgeLogin() ? "/home/message" : "/login"}>
                    <Badge count={this.state.newMsgNum}
                           style={{backgroundColor: 'rgb(255,218,23)', color: 'rgba(39,39,41,0.65)'}}>
                        <Avatar shape='circle' src={src} className={styles.avatar}/>
                    </Badge>
                </NavLink>
            </div>
        )
    }
}

UserAvatar.propTypes = UserAvatarProps;

export default withRouter(UserAvatar);
