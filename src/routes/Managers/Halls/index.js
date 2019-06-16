import {PureComponent} from "react";
import React from "react";
import styles from "./index.module.less";
import WithSider from "../../../components/WithSider";
import SeatsPicker from "../../../components/SeatsPicker";
import AddNew from "../../../components/AddNew";
import Input from "antd/es/input";
import {Col, Form, Row} from "antd";
import Button from "../../../components/Button";
import SeatTaken from "../../../components/SeatsPicker/SeatTaken";
import {addHall, getAllHalls} from "../../../services/apiHalls";

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

class Halls extends PureComponent {
  state = {
    halls: [],
    addVisible: "",
    seats: [[]],
    hallName: "",
    buttonVisible: false
  };

  componentWillMount() {
    getAllHalls().then((halls) => {
      this.setState({
        halls
      })
    });
    // this.setState({
    //   halls
    // })
  }

  handleAddClick = () => {
    this.setState({
      addVisible: "none"
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        let seats = new Array(parseInt(values.row));   //表格有10行
        for (let i = 0; i < seats.length; i++) {
          seats[i] = new Array(parseInt(values.column)).fill(1);    //每行有10列
        }
        console.log(seats);
        this.setState({
          seats: seats,
          hallName: values.hallName,
          buttonVisible: true
        })
      }
    })
  };

  handleConfirmAdd = () => {
    // TODO
    //  请求接口添加影厅
    let hall = {hallName: this.state.hallName, seats: this.state.seats};
    console.log(hall);
    addHall(hall)
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    const {halls} = this.state;
    return (
        <div className={styles.whole}>
          <div style={{display: this.state.addVisible, width: "100%"}}>
            {halls.map((hall) =>
                <div className={styles.hall} key={hall.hallName}>
                  <p>{hall.hallName}</p>
                  <SeatsPicker seats={hall.seats} onSelected={() => {
                  }}/>
                </div>
            )}
            <div className={styles.new} onClick={this.handleAddClick}>
              <AddNew/>
            </div>
          </div>
          <div className={styles.text} style={{display: this.state.addVisible === "" ? "none" : ""}}>
            <Form onSubmit={this.handleSubmit}>
              <Row gutter={36}>
                <Col span={6}>
                  <Form.Item label={'行数'}>
                    {getFieldDecorator('row')(
                        <Input placeholder={'row'}/>)}
                  </Form.Item>
                </Col>
                <Col span={6} offset={6}>
                  <Form.Item label={'列数'}>
                    {getFieldDecorator('column')(
                        <Input placeholder={'column'}/>)}
                  </Form.Item>
                </Col>
                <Col span={6} offset={6}>
                  <Form.Item label={'影厅名'}>
                    {getFieldDecorator('hallName')(
                        <Input placeholder={'hallName'}/>)}
                  </Form.Item>
                </Col>
              </Row>
              <Col span={6} offset={6}>
                <Form.Item>
                  <Button type="yellow" htmlType='submit'>确认</Button>
                </Form.Item>
              </Col>
            </Form>
          </div>
          <div className={styles.seats}>
            {this.state.seats.map((row, rowIndex) => {
              return (
                  <div className={styles.row}>
                    {row.map((column, columnIndex) => {
                      return (
                          <SeatTaken/>
                      )
                    })}
                  </div>
              )
            })}
          </div>
          {this.state.buttonVisible ? <Button type="yellow" onClick={this.handleConfirmAdd}>确认添加</Button> : ""}
        </div>
    )
  };
}

export default Form.create()(WithSider(Halls));
