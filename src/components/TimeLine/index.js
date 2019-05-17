import React, {Component} from "react";
import styles from './index.module.less';
import {Popover} from "antd";

const WHOLE_LENGHT = 100;
const HOUR_LENGTH = WHOLE_LENGHT / 24;

function percentageToLeft(time) {
  const hours = time.split(":")[0];
  const minutes = time.split(":")[1];
  return hours / 24 * WHOLE_LENGHT + minutes / 60 * HOUR_LENGTH;
};

class TimeLine extends Component {
  render() {
    const {intervals} = this.props;
    return (
        <div className={styles.whole}>
          <div className={styles['vertical-line-container']}>
            {new Array(25).fill(0).map((_, index) => {
              if (index === 12) return <div className={styles['vertical-line-long']}/>;
              if (index % 2 === 0) return <div className={styles['vertical-line']}/>;
            })}
          </div>
          <div className={styles['background-line']}>
            {intervals.map(interval => {
              const left = percentageToLeft(interval.startTime);
              const right = percentageToLeft(interval.endTime);
              return (
                  <Popover content={`${interval.startTime} - ${interval.endTime}`}>
                    <div style={{marginLeft: `${left}%`, width: `${right - left}%`}}
                         className={styles.lighter}/>
                  </Popover>
              );
            })}
          </div>
          <div className={styles['text-container']}>
            {new Array(25).fill(0).map((_, index) => {
              if (index === 12) return (<div className={styles['text']}>中午12:00</div>);
              if (index % 2 === 0)
                return (
                    <div className={styles['text']}>{
                      index < 12
                          ? ("上午" + (index < 10 ? "0" + index : index) + ":00")
                          : ("下午" + index + ":00")
                    }</div>
                );
            })}
          </div>
        </div>
    )
  }
}

export default TimeLine;
