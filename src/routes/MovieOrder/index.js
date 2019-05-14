import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithHeaderFooter from "../../components/WithHeaderFooter";
import SeatsPicker from "../../components/SeatsPicker";

/**
 * 0代表没有座位
 * 1代表已经被订
 * 2代表还可以选
 * @type {*[]}
 */
let seats = [
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
];

class MovieOrder extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
  }

  //indexOf和includes比较的都是引用 filter不改变原数组
  handleSelected = (position) => {
    this.setState((prevState) => {
      return (prevState.selected
              .filter(item => item.toString() !== position.toString())
              .length
          !== prevState.selected.length)
          ? {selected: prevState.selected.filter(item => item.toString() !== position.toString())}
          : {selected: [position, ...prevState.selected]}
    })
  };

  render() {
    const {movieId} = this.props.match.params;
    return (
        <div className={styles.whole}>
          <div className={styles['image-container']}>
          </div>
          <div className={styles.right}>
            <div className={styles.seletors}>
              订票,{movieId}
            </div>
            <div className={styles['picker-info']}>
              <div className={styles.picker}>
                <SeatsPicker seats={seats} onSelected={this.handleSelected}/>
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
