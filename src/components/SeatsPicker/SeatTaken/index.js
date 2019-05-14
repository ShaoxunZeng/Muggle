import React, {Component} from "react";
import Taken from '../../../assets/Rectangle/Alreadytaken.svg';
import styles from './index.module.less';
import {Popover} from 'antd';

class SeatTaken extends Component {
  render() {
    return (
        <div className={styles.whole}>
          <Popover content={"已被订"}>
            <img src={Taken}/>
          </Popover>
        </div>
    );
  }
}

export default SeatTaken;
