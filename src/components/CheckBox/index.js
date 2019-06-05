import React, {Component} from "react";
import styles from './index.module.less';
import {Checkbox} from "antd";

class CheckBox extends Component {
  state = {
    value: ''
  };

  componentWillMount() {
    this.setState({
      value: this.props.value
    });
  }

  onChange = () => {
    this.props.onSelected(this.state.value);
  };

  render() {
    return (
        <div className={styles.whole}>
          <Checkbox onChange={this.onChange}/>
        </div>
    )
  }
}

export default CheckBox;
