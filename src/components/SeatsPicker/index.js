import React, {Component} from "react";
import styles from './index.module.less';
import Seat from "./Seat";
import SeatTaken from "./SeatTaken";
import NoSeat from "./NoSeat";

class SeatsPicker extends Component {
  /**
   * 掌握所有的位置信息，所以负责计算出每一个位子的坐标
   * 下标从0开始，传递给子组件负责渲染
   * @param seats
   * @param rowIndex
   * @param columnIndex
   * @returns {*[]}
   */
  calculate = function (seats, rowIndex, columnIndex) {
    let i = 0;
    let realColumnIndex = 0;
    while (i < columnIndex) {
      if (seats[rowIndex][i] !== 0)
        realColumnIndex += 1;
      i += 1;
    }
    return [rowIndex, realColumnIndex];
  };

  render() {
    /**
     * onSelected从父组件传递给子组件
     */
    const {seats, onSelected, sceneId} = this.props;
    return (
        <div className={styles.whole}>
          {seats.map((row, rowIndex) => {
            return (
                <div className={styles.row}>
                  {row.map((column, columnIndex) => {
                    if (column === 0) {
                      return <NoSeat key={sceneId + "_" + columnIndex}/>  //产生唯一的key，不仅是sibling，而且要和别的场次不一样
                    } else return (column === 2
                        ? <SeatTaken key={sceneId + "_" + columnIndex}/>
                        :
                        <Seat key={sceneId + "_" + columnIndex} position={this.calculate(seats, rowIndex, columnIndex)}
                              onSelected={onSelected}/>)
                  })}
                </div>
            )
          })}
        </div>
    );
  }
}

export default SeatsPicker;
