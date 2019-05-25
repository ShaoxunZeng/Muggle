import React, {Component} from "react";
import {ReactComponent as Taken} from '../../../assets/Rectangle/Alreadytaken.svg';
import styles from './index.module.less';
import {Popover} from 'antd';

class SeatTaken extends Component {
  render() {
    return (
        <div className={styles.whole}>
          <Popover content={"已被订"}>
            <Taken/>
          </Popover>
        </div>
    );
  }
}

export default SeatTaken;
