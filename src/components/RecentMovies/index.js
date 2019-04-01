import React, { Component } from "react";
import styles from './index.module.less';

class ImageBoard extends Component {
  render() {
    return (
        <div className={styles.whole}>
          <div className={styles.header}>
            近期热片
          </div>
          <div className={styles['image-board']}>
            <div className={styles.image} > <img src={"https://s2.ax1x.com/2019/04/01/Ayk8SI.png"}/></div>
            <div className={styles.image} > <img src={"https://s2.ax1x.com/2019/04/01/Ayk8SI.png"}/></div>
            <div className={styles.image} > <img src={"https://s2.ax1x.com/2019/04/01/Ayk8SI.png"}/></div>
            <div className={styles.image} > <img src={"https://s2.ax1x.com/2019/04/01/Ayk8SI.png"}/></div>
          </div>
        </div>
    )
  }
}

export default ImageBoard;
