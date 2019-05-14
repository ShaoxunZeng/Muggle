import React, {Component} from "react";
import styles from './index.module.less';
import Seat from "./Seat";
import SeatTaken from "./SeatTaken";
import NoSeat from "./NoSeat";

class SeatsPicker extends Component {
  render() {
    /**
     * onSelected从父组件传递给子组件
     */
    const {seats, onSelected} = this.props;

    /**
     * 掌握所有的位置信息，所以负责计算出每一个位子的坐标
     * 下标从0开始，传递给子组件负责渲染
     * @param rowIndex
     * @param columnIndex
     * @returns {*[]}
     */
    function calculate(rowIndex, columnIndex) {
      let i = 0;
      let realColumnIndex = 0;
      while (i < columnIndex) {
        if (seats[rowIndex][i] !== 0)
          realColumnIndex += 1;
        i += 1;
      }
      return [rowIndex, realColumnIndex];
    }

    return (
        <div className={styles.whole}>
          {seats.map((row, rowIndex) => {
            return (
                <div className={styles.row}>
                  {row.map((column, columnIndex) => {
                    if (column == 0) {
                      return <NoSeat/>
                    } else return (column == 1
                        ? <SeatTaken/>
                        : <Seat position={calculate(rowIndex, columnIndex)} onSelected={onSelected}/>)
                  })}
                </div>
            )
          })}
        </div>
    );
  }
}

export default SeatsPicker;
