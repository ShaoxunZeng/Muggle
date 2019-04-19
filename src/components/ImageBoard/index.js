import React, { Component } from "react";
import styles from './index.module.less';

class ImageBoard extends Component {
  render() {
    return (
        <div className={styles.whole}>
          <div className={styles.image}>
            <img src={"https://s2.ax1x.com/2019/04/01/AyCRGq.png"} />
          </div>
        </div>
    )
  }
}

export default ImageBoard;
