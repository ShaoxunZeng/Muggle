import React, {Component} from 'react'
import {Table} from "antd";
import styles from './index.module.less'
import Button from "../../../../../../components/Button";

class RechargeHistory extends Component {

    handleRecharge = () => {
        alert('充值成功')
    };

    operation = () => {
        return (
            <div>
                <Button type={'yellow'} onClick={this.handleRecharge}>现在充值</Button>
            </div>
        )
    };
    columns = [
        {title: '充值时间', align: 'center', dataIndex: 'time', key: 'time'},
        {title: '充值金额', align: 'center', dataIndex: 'cost', key: 'cost'},
        {
            title: this.operation, align: 'right'
        }
    ];


    render() {
        const rechargeHistory = this.props.rechargeHistory;

        return (
            <div>
                <Table columns={this.columns} dataSource={rechargeHistory}/>
            </div>
        )
    }
}

export default RechargeHistory
