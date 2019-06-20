import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import {DatePicker, Input, Select, TimePicker} from "antd";
import SeatsPicker from "../../../../../components/SeatsPicker";
import MovieInfoCard from "../MovieInfoCard";
import Button from "../../../../../components/Button";
import {changeScene, deleteScene} from "../../../../../services/apiArrange";
import moment from "moment";

class ArrangeInfoCard extends PureComponent {
  delScene = (sceneId) => {
    console.log(sceneId);
    deleteScene(sceneId).then(res => {
      alert('删除排片成功！');
      console.log(res)
    }).catch(res => {
      alert('该场次已有观众购买，无法删除');
      console.log(res)
    })
  };

  state = {
    hallName: "",
    price: "",
    date: "",
    time: ""
  };

  handleDateChange = (res) => {
    let date = new Date(res);
    let d = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    console.log(d);
    this.setState({
      date: d
    })
  };

  handleTimeChange = (res) => {
    let t = moment(res).format("HH:mm:ss");
    console.log(t);
    this.setState({
      time: t
    })
  };

  handlePriceChange = (res) => {
    console.log(res.target.value);
    this.setState({
      price: parseInt(res.target.value)
    })
  };

  handleHallChange = (res) => {
    this.setState({
      hallName: res
    })
  };

  handleSubmitChange = () => {
    const {sceneId} = this.props.arrangeInfo;
    const {hallName, date, time, price} = this.state;
    let scene = {
      sceneId,
      hallName,
      date,
      startTime: time,
      price,
    };
    changeScene(scene).then((res) => {
      window.location.href = "/manage/arrange";
    });
  };

  componentWillMount() {
    const {arrangeInfo, halls} = this.props;
    this.setState({
      hallName: arrangeInfo.hallName,
      date: arrangeInfo.data,
      time: arrangeInfo.startTime,
      price: arrangeInfo.price
    });
  };

  render() {
    const {arrangeInfo, halls} = this.props;
    const {hallName, date, time, price} = this.state;
    return (
        <div className={styles.whole}>
          <div className={styles.info}>
            <MovieInfoCard movieName={arrangeInfo.movieName}
                           posterUrl={arrangeInfo.posterUrl}
                           length={arrangeInfo.length}
                           price={arrangeInfo.price}/>
          </div>

          <div className={styles['inputs-container']}>
            <div className={styles.container}>
              <div className={styles.text}>影厅</div>
              <Select
                  showSearch
                  style={{width: 200}}
                  placeholder="Select a hall"
                  optionFilterProp="children"
                  className={styles.input}
                  onChange={this.handleHallChange}
                  defaultValue={hallName}
              >
                {halls.map(hall =>
                    <Select.Option value={hall.hallName}>{hall.hallName}</Select.Option>
                )}
              </Select>
            </div>
            <div className={styles.container}>
              <div className={styles.text}>日期</div>
              <DatePicker className={styles.input} onChange={this.handleDateChange} defaultValue={date}/>
            </div>
            <div className={styles.container}>
              <div className={styles.text}>时间</div>
              <TimePicker onChange={this.handleTimeChange} className={styles.input} defaultValue={time}/>
            </div>
            <div className={styles.container}>
              <div className={styles.text}>票价</div>
              <Input className={styles.input} placeholder="price" onChange={this.handlePriceChange} defaultValue={price}/>
            </div>
            <Button type="yellow" onClick={this.handleSubmitChange}>确认修改</Button>
            <Button type="gray"
                    onClick={() => this.delScene(arrangeInfo.sceneId)}
            >删除排片</Button>
          </div>

          <div className={styles['screen-picker']}>
            <div className={styles.screen}>
              <div className={styles.line} style={{marginRight: 25}}/>
              Screen
              <div className={styles.line} style={{marginLeft: 25}}/>
            </div>
            <div className={styles.picker}>
              <SeatsPicker seats={arrangeInfo.seats} onSelected={() => {
              }}/>
            </div>
          </div>
        </div>
    )
  };
}

export default ArrangeInfoCard;
