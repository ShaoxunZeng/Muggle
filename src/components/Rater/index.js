import React, {Component} from "react";
import { Rate } from 'antd';
import styles from './index.module.less';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

class Rater extends Component {
  state = {
    value: 3,
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
        <span>
        <Rate count={10} onChange={this.handleChange} value={value} className={styles.rater} />
          <span className="ant-rate-text">{desc[value - 1]}</span>
      </span>
    );
  }
}

export default Rater;
