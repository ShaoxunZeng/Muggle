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
            alert('该影厅当前有排片，无法修改');
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
                    <div>
                        <p>{hallName}</p>
                        <SeatsPicker seats={seats} onSelected={() => {
                        }}/>
                    </div>
                    <div className={styles.change}>
                        <div className={styles.block}>
                            <p>行数</p>
                            <Input placeholder="row" onChange={this.handleRoweChange}/>
                        </div>
                        <div className={styles.block}>
                            <p>列数</p>
                            <Input placeholder="column" onChange={this.handleColumnChange}/>
                        </div>
                        <div className={styles.block}>
                            <p>影厅名</p>
                            <Input placeholder="name" onChange={this.handleNameChange}/>
                        </div>
                        <Button type="yellow" onClick={this.handleConfirm}>确认修改</Button>
                    </div>
                </div>
            </div>
        )
    };
}

export default HallCard;
