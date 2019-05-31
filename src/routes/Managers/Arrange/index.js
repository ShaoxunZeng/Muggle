import { PureComponent } from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";
import {DatePicker, Icon, Input, Select, Tooltip} from "antd";
import TimeLine from "../../../components/TimeLine";

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

            <div className={styles.text}> 选择日期 </div>
            <DatePicker className={styles.datepicker}/>
            <div className={styles.text}> 选择影厅 </div>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
            >
              <Select.Option value="jack">Jack</Select.Option>
              <Select.Option value="lucy">Lucy</Select.Option>
              <Select.Option value="tom">Tom</Select.Option>
            </Select>
            <TimeLine intervals={[{startTime: '9:00', endTime: '10:00'}]}/>
          </div>
        </div>
    )
  };
}

export default WithSider(Arrange);
