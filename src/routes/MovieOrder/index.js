import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooter from "../../components/WithHeaderFooter";
import SeatsPicker from "../../components/SeatsPicker";
import {Cascader} from 'antd';

/**
 * 0代表没有座位
 * 1代表已经被订
 * 2代表还可以选
 * @type {*[]}
 */

let scenes = [
  {
    sceneId: 1,
    price: 1,
    hallName: '1号厅',
    date: '2019-6-1',
    interval: '9:00-12:00',
    seats: [
      [0, 0, 0, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 1, 0, 0, 0],
      [0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0, 0],
      [0, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0],
      [2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2],
      [1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2],
      [2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1],
      [2, 1, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 2],
      [1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2],
      [0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 2, 2, 0],
      [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 0, 0],
      [0, 0, 0, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 0, 0, 0],
    ]
  }, {
    sceneId: 1,
    price: 1,
    hallName: '2号厅',
    date: '2019-6-1',
    interval: '9:00-12:00',
    seats: [
      [0, 0, 0, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 1, 0, 0, 0],
      [0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0, 0],
      [0, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0],
      [2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2],
      [1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2],
      [2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1],
      [2, 1, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 2],
      [1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2],
    ]
  }, {
    sceneId: 1,
    price: 1,
    hallName: '1号厅',
    date: '2019-6-2',
    interval: '13:00-15:00',
    seats: [
      [0, 0, 0, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 1, 0, 0, 0],
      [0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0, 0],
      [0, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0],
      [2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2],
      [1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2],
      [2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1],
      [2, 1, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 2],
      [1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2],
      [0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 2, 2, 0],
    ]
  }, {
    sceneId: 1,
    price: 1,
    hallName: '1号厅',
    date: '2019-6-2',
    interval: '9:00-12:00',
    seats: [
      [0, 0, 0, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 1, 0, 0, 0],
      [0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0, 0],
      [0, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 0],
      [2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2],
      [1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 2],
      [2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 1],
      [2, 1, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1, 2],
      [1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1, 2],
      [0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 2, 2, 0],
      [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 0, 0],
    ]
  }
];

class MovieOrder extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      seats: [[]],
      selectedSeats: [],
      selectedScene: {},
      scenes: [{}]
    };
  }

  componentWillMount() {
    //TODO
    // 拉取数据，放到state里面
    // 同时指定第一个场次的seats座位默认展示的seats
    this.setState({
      scenes: scenes,
      seats: scenes[0].seats
    })
  };

  renderOptions = function (scenes) {
    let options = [];
    let filter = [];
    let a1 = {};
    let a2 = {};
    for (let i in scenes) {
      filter = options.filter(item => item.value === scenes[i].date);
      if (filter.length === 0) {
        a1 = {value: scenes[i].date, label: scenes[i].date, children: []};
        options.push(a1);
      } else a1 = filter[0];
      filter = a1.children.filter(item => item.value === scenes[i].interval);
      if (filter.length === 0) {
        a2 = {value: scenes[i].interval, label: scenes[i].interval, children: []};
        a1.children.push(a2);
      } else a2 = filter[0];
      filter = a2.children.filter(item => item.value === scenes[i].hallName);
      if (filter.length === 0) {
        a1 = {value: scenes[i].hallName, label: scenes[i].hallName};
        a2.children.push(a1);
      }
    }
    return options;
  };

  handleChange = (value, _) => {
    let seats = this.state.scenes.filter(item =>
        item.date === value[0]
        && item.interval === value[1]
        && item.hallName === value[2]
    )[0].seats;
    this.setState({
      seats: seats
    })
  };

  //indexOf和includes比较的都是引用 filter不改变原数组
  handleSelected = (position) => {
    this.setState((prevState) => {
      return (prevState.selectedSeats
              .filter(item => item.toString() !== position.toString())
              .length
          !== prevState.selectedSeats.length)
          ? {selectedSeats: prevState.selectedSeats.filter(item => item.toString() !== position.toString())}
          : {selectedSeats: [position, ...prevState.selectedSeats]}
    })
  };

  render() {
    const {movieId} = this.props.match.params;
    return (
        <div className={styles.whole}>
          <div className={styles['image-container']}>
          </div>
          <div className={styles.right}>
            <div className={styles['selectors-container']}>
              <Cascader
                  options={this.renderOptions(this.state.scenes)}
                  className={styles.selectors}
                  onChange={this.handleChange}
                  defaultValue={[this.state.scenes[0].date, this.state.scenes[0].interval, this.state.scenes[0].hallName]}
              />
            </div>
            <div className={styles['picker-info']}>
              <div className={styles.picker}>
                <SeatsPicker seats={this.state.seats} onSelected={this.handleSelected}/>
              </div>
              <div className={styles.information}>
              </div>
            </div>
          </div>
        </div>
    )
  };
}

export default WithHeaderFooter(MovieOrder);
