import React, {Component} from "react";
import styles from './index.module.less';
import {RectangleUnClicked, RectangleClicked} from '../../assets/Rectangle';

class SeatsPicker extends Component {
  render() {
    return (
        <div className={styles.whole}>
          <RectangleClicked/>
        </div>
    );
  }
}

export default SeatsPicker;
