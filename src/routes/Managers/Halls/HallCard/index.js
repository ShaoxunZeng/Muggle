import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import SeatsPicker from "../../../../components/SeatsPicker";
import Input from "antd/es/input";
import Button from "../../../../components/Button";
import {addHall, changeHall} from "../../../../services/apiHalls";

let halls = [{
  hallName: 'xxx',
  seats: [[1, 1, 1]]//0代表不可用，1代表可用
}, {
  hallName: 'xxx',
  seats: [[1, 1, 1]]//0代表不可用，1代表可用
}, {
  hallName: 'xxx',
  seats: [[1, 1, 1]]//0代表不可用，1代表可用
}, {
  hallName: 'xxx',
  seats: [[1, 1, 1]]//0代表不可用，1代表可用
}, {
  hallName: 'xxx',
  seats: [[1, 1, 1]]//0代表不可用，1代表可用
}];

class HallCard extends PureComponent {
  handleConfirm = () => {
    const {row, column, hallName} = this.state;
    const {hallId} = this.props;
    let seats = new Array(parseInt(row));
    for (let i = 0; i < seats.length; i++) {
      seats[i] = new Array(parseInt(column)).fill(1);
    }
    console.log(seats);
    changeHall({seats, hallName, hallId}).then((res) => {
      alert('修改影厅成功！');
      setTimeout(window.location.href = "/manage/halls", 3000);
    }).catch(res => {
      alert('修改失败！' + res.message);
    })
  };

  handleRoweChange = (e) => {
    this.setState({
      row: e.target.value
    })
  };

  handleColumnChange = (e) => {
    this.setState({
      column: e.target.value
    })
  };

  handleNameChange = (e) => {
    this.setState({
      hallName: e.target.value
    })
  };

  state = {
    hallName: "",
    row: 0,
    column: 0
  };

  componentWillMount() {
    const {hallName, seats} = this.props;
    this.setState({
      hallName,
      seats
    })
  }

  render() {
    const {seats} = this.state;
    const {hallName} = this.props;
    return (
        <div className={styles.whole}>
          <div className={styles.hall} key={hallName}>
            <p>{hallName}</p>
            <SeatsPicker seats={seats} onSelected={() => {
            }}/>
            <p>行数</p>
            <Input className={styles.input} placeholder="row" onChange={this.handleRoweChange}/>
            <p>列数</p>
            <Input className={styles.input} placeholder="column" onChange={this.handleColumnChange}/>
            <p>影厅名字</p>
            <Input className={styles.input} placeholder="name" onChange={this.handleNameChange}/>
            <Button type="yellow" onClick={this.handleConfirm}>确认修改</Button>
          </div>
        </div>
    )
  };
}

export default HallCard;
