import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";
import {DatePicker, Icon, Input, Popover, Select} from "antd";
import TimeLine from "../../../components/TimeLine";
import ArrangeInfoCard from "./components/ArrangeInfoCard";
import AddNew from "../../../components/AddNew";
import moment from 'moment';
import {getAllHalls} from "../../../services/apiHalls";
import ArrangeInfoModal from "./ArrangeInfoModal";
import {getAllArranges} from "../../../services/apiArrange";

let arrangeInfo = [
  {
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
    posterUrl: "https://s2.ax1x.com/2019/05/31/VQrg6s.png",
    length: 123
  }, {
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
    posterUrl: "https://s2.ax1x.com/2019/05/31/VQrg6s.png",
    length: 123
  }
];

class Arrange extends PureComponent {
  showArrangeForm = () => {
    this.setState({
      arrangeFormVisible: true
    })
  };
  closeArrangeInfoModal = () => {
    this.setState({
      arrangeFormVisible: false
    })
  };

  handleChooseDate = (data) => {
    let d = new Date(data);
    let date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    console.log(date);
    this.setState({
      date: date
    });
    getAllArranges(this.state.hallName, date).then((res) => {
      this.setState({
        scenes: res
      })
    })
  };

  handleChooseHall = (hallName) => {
    this.setState({
      hallName: hallName
    });
    getAllArranges(hallName, this.state.date).then((res) => {
      this.setState({
        scenes: res
      })
    })
  };

  componentWillMount() {
    let d = moment(new Date(), "YYYY/MM/DD").toDate();
    console.log(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate());
    getAllHalls().then((res) => {
      this.setState({
        halls: res,
        hallName: res[0].hallName,
        date: d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
      });
    }).then((res) => {
      getAllArranges(this.state.hallName, this.state.date).then((res) => {
        this.setState({
          scenes: res
        })
      })
    });
  };

  state = {
    halls: [],
    hallName: "",
    date: "",
    scenes: [],
    arrangeFormVisible: false
  };

  render() {
    const {scenes, halls} = this.state;
    let intervals = this.state.scenes.map(scene =>
        scene.interval
    );
    console.log(intervals);
    return (
        <div className={styles.whole}>
          <Input
              placeholder="Search Movies"
              prefix={<Icon type="search" style={{color: 'rgb(255,255,255)'}}/>}
              className={styles.input}
          />
          <div className={styles.underline}/>
          <div className={styles['main-body']}>

            <div className={styles['picker-container']}>
              <div className={styles['time-picker']}>
                <div className={styles.text}> 选择日期</div>
                <DatePicker
                    className={styles.datepicker}
                    onChange={this.handleChooseDate}
                    defaultValue={moment(new Date(), "YYYY/MM/DD")}/>
              </div>

              <div className={styles['hall-picker']}>
                <div className={styles.text}> 选择影厅</div>
                <Select
                    showSearch
                    style={{width: 200}}
                    placeholder="Select a hall"
                    optionFilterProp="children"
                    className={styles.hallpicker}
                    onChange={this.handleChooseHall}
                    defaultValue={this.state.hallName}
                >
                  {halls.map((hall) => {
                    return <Select.Option value={hall.hallName}>{hall.hallName}</Select.Option>
                  })}
                </Select>
              </div>
            </div>
            <div className={styles.timeline}>
              <TimeLine intervals={intervals}/>
            </div>

            <div className={styles.cards}>
              {scenes.map((item) => {
                return (
                    <div className={styles.card}>
                      <ArrangeInfoCard arrangeInfo={item} halls={this.state.halls}/>
                    </div>
                )
              })}
            </div>
            <Popover content={"新增排片"}>
              <div className={styles.addnew} onClick={() => this.showArrangeForm()}>
                <AddNew/>
              </div>
            </Popover>
          </div>
          <ArrangeInfoModal arrangeFormVisible={this.state.arrangeFormVisible}
                            closeArrangeInfoModal={this.closeArrangeInfoModal}/>
        </div>
    )
  };
}

export default WithSider(Arrange);
