import {Component} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooter from "../../../components/WithHeaderFooter";
import SeatsPicker from "../../../components/SeatsPicker";
import {Cascader} from 'antd';
import {ReactComponent as RectangleClicked} from '../../../assets/Rectangle/Clicked.svg';
import {ReactComponent as RectangleUnClicked} from '../../../assets/Rectangle/Unclicked.svg';
import {ReactComponent as Taken} from '../../../assets/Rectangle/Alreadytaken.svg';
import Button from "../../../components/Button";

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
      [0, 0, 0, 2, 2, 2, 1, 1, 1, 2, 1],
      [0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 2],
      [0, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2],
      [2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2],
      [1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1],
      [2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2],
      [2, 1, 1, 2, 2, 2, 1, 2, 1, 2, 2],
      [1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1],
      [0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2],
      [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1],
      [0, 0, 0, 2, 1, 2, 1, 2, 2, 2, 1],
    ]
  }, {
    sceneId: 2,
    price: 1,
    hallName: '2号厅',
    date: '2019-6-1',
    interval: '9:00-12:00',
    seats: [
      [0, 0, 0, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 1, 0, 0],
      [0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0],
      [0, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2],
      [2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1],
      [1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1],
      [2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1],
      [2, 1, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1],
      [1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1],
    ]
  }, {
    sceneId: 3,
    price: 1,
    hallName: '1号厅',
    date: '2019-6-2',
    interval: '13:00-15:00',
    seats: [
      [0, 0, 0, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 1, 0, 0],
      [0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0],
      [0, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2],
      [2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1],
      [1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1],
      [2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1],
      [2, 1, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1],
      [1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1],
      [0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 2, 2],
    ]
  }, {
    sceneId: 4,
    price: 1,
    hallName: '1号厅',
    date: '2019-6-2',
    interval: '9:00-12:00',
    seats: [
      [0, 0, 0, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 1, 0, 0],
      [0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0],
      [0, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2],
      [2, 1, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 1, 1, 1, 1],
      [1, 2, 1, 2, 2, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1],
      [2, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1],
      [2, 1, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 1, 1, 1],
      [1, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 1],
      [0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 2, 2],
      [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 0],
    ]
  }
];

class MovieOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSeats: [],
      selectedScene: {},
      scenes: [{}]
    };
  }

  componentWillMount() {
    //TODO
    // 拉取数据，放到state里面
    // 指定第一个场次为默认选择的场次
    // 同时指定第一个场次的seats作为默认展示的seats
    // 指定默认的sceneId，作为唯一的key传入Picker组件
    this.setState({
      scenes: scenes,
      selectedScene: scenes[0],
    })
  };

  /**
   * 将扁平数据结构转化成级联数据结构
   * @param scenes
   * @returns {Array}
   */
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
    let scene = this.state.scenes.filter(item =>
        item.date === value[0]
        && item.interval === value[1]
        && item.hallName === value[2]
    )[0];
    if (scene.sceneId !== this.state.selectedScene.sceneId) {  // 如果确实切换了影厅，才需要更新
      this.setState((prevState) => {
        return {
          selectedScene: scene,
          selectedSeats: []
        }
      })
    }
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
    const {posterUrl, movieType, year, length, movieName} = this.props.location.state;
    const {scenes, selectedSeats, selectedScene} = this.state;
    return (
        <div className={styles.whole}>
          <div className={styles.left}>
            <div className={styles['image-container']}>
              <img className={styles.image} src={posterUrl} alt=""/>
            </div>
            <div className={styles['details-container']}>
              <div className={styles.name}>{movieName}</div>
              <div className={styles.type}>{movieType}</div>
              <div className={styles['year-length-container']}>
                <div className={styles.year}>{year}</div>
                <div className={styles.dot}/>
                <div className={styles.length}>{length + " min"}</div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles['picker-selector']}>
              <div className={styles['selectors-container']}>
                <Cascader
                    options={this.renderOptions(scenes)}
                    className={styles.selectors}
                    onChange={this.handleChange}
                    defaultValue={[scenes[0].date, scenes[0].interval, scenes[0].hallName]}
                />
              </div>
              <div className={styles.screen}>
                <div className={styles.line} style={{marginRight: 25}}/>
                Screen
                <div className={styles.line} style={{marginLeft: 25}}/>
              </div>
              <div className={styles.picker}>
                <SeatsPicker seats={selectedScene.seats} onSelected={this.handleSelected}
                             sceneId={selectedScene.sceneId}/>
              </div>
            </div>
            <div className={styles.information}>
              <div className={styles.icons}>
                <Taken/>
                <RectangleUnClicked/>
                <RectangleClicked/>
              </div>
              <div className={styles.text}>
                <div>被购</div>
                <div>可选</div>
                <div>已选</div>
              </div>
              影厅
              <div className={styles.hall}>
                {selectedScene.hallName}
              </div>
              座位
              <div className={styles.seats}>
                {selectedSeats.map((item) => {
                  return (<div>
                    {`${item[0] + 1} 排 - ${item[1] + 1} 座`}
                  </div>)
                })}
              </div>
              总价
              <div className={styles.price}>
                {`¥${selectedSeats.length * selectedScene.price}`}
              </div>
              <div className={styles['continue-button']}>
                <Button type={'gray'}>立即购买</Button>
              </div>
            </div>
          </div>
        </div>
    )
  };
}

export default WithHeaderFooter(MovieOrder);
