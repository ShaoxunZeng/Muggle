import React, {Component} from "react";
import RectangleClicked from '../../../assets/Rectangle/Clicked.svg';
import RectangleUnClicked from '../../../assets/Rectangle/Unclicked.svg';
import styles from './index.module.less';
import {Popover} from 'antd';

class Seat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  /**
   * 一个是更新自己的状态，另一个是把位置信息传递给父组件
   */
  handleClick = () => {
    const {onSelected, position} = this.props;
    this.setState({
      isClicked: !this.state.isClicked,
    });
    onSelected(position)
  };

  render() {
    const {isClicked} = this.state;
    /**
     * 下标从0开始
     */
    const {position} = this.props;
    return (
        <div className={styles.whole}>
          <Popover content={`${position[0]}排 ${position[1]}座`}>
            <img src={isClicked ? RectangleClicked : RectangleUnClicked} onClick={() => this.handleClick()}/>
          </Popover>
        </div>
    );
  }
}

export default Seat;
