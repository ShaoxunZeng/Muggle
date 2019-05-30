import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";
import TimeLine from "../../../components/TimeLine";
import {DatePicker} from "antd";

let intervals = [{
  startTime: "7:00",
  endTime: "9:00"
},{
  startTime: "09:30",
  endTime: "11:30"
},{
  startTime: "21:30",
  endTime: "23:28"
},{
  startTime: "18:10",
  endTime: "20:20"
}];

class Manage extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          Manage
          <div className={styles.block}>
            <TimeLine intervals={intervals}/>
          </div>
          <DatePicker className={styles.datepicker}/>
        </div>
    )
  };
}

export default WithSider(Manage);
