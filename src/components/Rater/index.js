import React, {Component} from "react";
import { Rate } from 'antd';
import styles from './index.module.less';

class Rater extends Component {
  state = {
    value: 10,
  };

  handleChange = (value) => {
    this.setState({ value });
    this.props.handleRateChange(value);
  };

  render() {
    const { value } = this.state;
    return (
        <div className={styles.container}>
          <Rate count={10} onChange={this.handleChange} ref='rateValue' value={value} className={styles.rater} />
          <div className={styles['rater-text']}>{value}</div>
        </div>
    );
  }
}

export default Rater;
