import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";
import {DatePicker, Icon, Input, Select, Tooltip} from "antd";
import TimeLine from "../../../components/TimeLine";

let arrangInfo = [
  {
    sceneId:1,
    price: 100,
    hallName: '1号厅 3D MAX',
    date: '2019-1-1',
    interval: {
      startTime: '9:10',
      endTime: '14:00'
    },
    seats: [[1]],
  }
];

class Arrange extends PureComponent {
  render() {
    return (
        <div className={styles.whole}>
          <Input
              placeholder="Search Movies"
              prefix={<Icon type="search" style={{ color: 'rgb(255,255,255)' }} />}
              className={styles.input}
          />
          <div className={styles.underline}/>
          <div className={styles['main-body']}>

            <div className={styles['picker-container']}>
              <div className={styles['time-picker']}>
                <div className={styles.text}> 选择日期 </div>
                <DatePicker className={styles.datepicker}/>
              </div>

              <div className={styles['hall-picker']}>
                <div className={styles.text}> 选择影厅 </div>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    className={styles.hallpicker}
                >
                  <Select.Option value="jack">1</Select.Option>
                  <Select.Option value="lucy">2</Select.Option>
                  <Select.Option value="tom">3</Select.Option>
                </Select>
              </div>
            </div>
            <TimeLine intervals={[{startTime: '9:00', endTime: '10:00'}]}/>
          </div>
        </div>
    )
  };
}

export default WithSider(Arrange);
