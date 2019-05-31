import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {DatePicker} from "antd";
import SeatsPicker from "../../../../../components/SeatsPicker";
import MovieInfoCard from "../MovieInfoCard";

let arrangeInfo = {
  sceneId: 1,
  price: 100,
  hallName: '1号厅 3D MAX',
  date: '2019-1-1',
  interval: {
    startTime: '9:10',
    endTime: '14:00'
  },
  seats: [
    [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
  ],
  movieName: "spider man",
  posterUrl: "https://s2.ax1x.com/2019/05/31/VQrg6s.png"
};

class ArrangeInfoCard extends PureComponent {
  render() {
    // const {arrangeInfo} = this.props;
    return (
        <div className={styles.whole}>
          <div className={styles.info}>
            <MovieInfoCard movieName={arrangeInfo.movieName} price={arrangeInfo.price}
                           posterUrl={arrangeInfo.posterUrl}/>
          </div>

          <div className={styles['screen-picker']}>
            <div className={styles.screen}>
              <div className={styles.line} style={{marginRight: 25}}/>
              Screen
              <div className={styles.line} style={{marginLeft: 25}}/>
            </div>
            <div className={styles.picker}>
              <SeatsPicker seats={arrangeInfo.seats} onSelected={() => {}}/>
            </div>
          </div>

        </div>
    )
  };
}

export default ArrangeInfoCard;
