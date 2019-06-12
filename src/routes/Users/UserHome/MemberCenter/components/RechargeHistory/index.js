import React, {Component} from 'react'
import {Table} from "antd";
import Button from "../../../../../../components/Button";
import RechargeInfoModal from "./Recharge/RechargeInfoModal";

class RechargeHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RechargeFormVisible: false
        }
    }

    closeRechargeInfoModal = () => {
        this.setState({
            RechargeFormVisible: false
        })
    };

    handleRecharge = () => {
        this.setState({
                RechargeFormVisible: true
            }
        );

        //alert('充值成功')
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
        const memberId = this.props.memberId;

        return (
            <div>
                <Table columns={this.columns} dataSource={rechargeHistory}/>
                <RechargeInfoModal RechargeFormVisible={this.state.RechargeFormVisible}
                                   closeRechargeInfoModal={this.closeRechargeInfoModal}
                                   memberId={memberId}
                />
            </div>
        )
    }
}

export default RechargeHistory
